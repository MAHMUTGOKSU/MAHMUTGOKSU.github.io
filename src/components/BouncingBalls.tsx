"use client";

import React, { useEffect, useRef } from "react";

type Ball = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
};

export default function BouncingBalls({ count = 5 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let lastTs = performance.now();
    const startTs = lastTs;

    const DPR = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    function resize() {
      const rect = container.getBoundingClientRect();
      const width = Math.max(100, rect.width);
      const height = Math.max(100, rect.height);
      canvas.width = Math.floor(width * DPR);
      canvas.height = Math.floor(height * DPR);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);

    // Initialize balls near the top with a bit more initial speed
    const palette = [
      getComputedStyle(document.documentElement).getPropertyValue("--primary-400").trim() || "#fcde44",
      getComputedStyle(document.documentElement).getPropertyValue("--secondary-400").trim() || "#a78bfa",
      getComputedStyle(document.documentElement).getPropertyValue("--primary-500").trim() || "#f5d12d",
      getComputedStyle(document.documentElement).getPropertyValue("--secondary-600").trim() || "#7c3aed",
    ];

    function rand(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const balls: Ball[] = [];
    const rect = container.getBoundingClientRect();
    for (let i = 0; i < count; i++) {
      const r = rand(10, 16);
      const x = rand(r + 2, Math.max(r + 2, rect.width - r - 2));
      const y = rand(r + 2, r + 30);
      balls.push({
        x,
        y,
        vx: rand(-120, 120),
        vy: rand(-40, 40),
        r,
        color: palette[i % palette.length],
      });
    }

    const gravity = 2200; // px/s^2, stronger gravity
    const restitution = 0.92; // bounciness for collisions
    const wallRestitution = 0.9; // walls slightly less bouncy
    const airDrag = 0.999; // very light damping
    const maxSpeed = 900; // px/s clamp to avoid explosion
    const minSpeedGravity = 80; // px/s ensure motion during gravity phase
    const minSpeedTravel = 140; // px/s ensure motion after gravity
    const switchTime = 5; // seconds before abandoning gravity
    let randomPhase = false; // becomes true after switchTime

    function step(now: number) {
      const dtSec = Math.min(0.033, (now - lastTs) / 1000); // cap dt to avoid jumps
      lastTs = now;

      const width = canvas.width / DPR;
      const height = canvas.height / DPR;

      ctx.clearRect(0, 0, width, height);

      // Determine phase transition
      if (!randomPhase) {
        const elapsed = (now - startTs) / 1000;
        if (elapsed >= switchTime) {
          randomPhase = true;
          // Assign a single random travel direction to each ball, based on current speed
          for (const b of balls) {
            const currentSpeed = Math.max(200, Math.hypot(b.vx, b.vy));
            const angle = Math.random() * Math.PI * 2;
            b.vx = Math.cos(angle) * currentSpeed;
            b.vy = Math.sin(angle) * currentSpeed;
          }
        }
      }

      // Physics integration (gravity initially; then constant-velocity with collisions)
      for (let b of balls) {
        if (!randomPhase) {
          // Gravity phase
          b.vy += gravity * dtSec;
        }

        // Integrate
        b.x += b.vx * dtSec;
        b.y += b.vy * dtSec;

        // Wall collisions
        if (b.x - b.r < 0) {
          b.x = b.r;
          b.vx = -b.vx * wallRestitution;
        } else if (b.x + b.r > width) {
          b.x = width - b.r;
          b.vx = -b.vx * wallRestitution;
        }
        if (b.y - b.r < 0) {
          b.y = b.r;
          b.vy = -b.vy * wallRestitution;
        } else if (b.y + b.r > height) {
          b.y = height - b.r;
          b.vy = -b.vy * wallRestitution;
          // simulate a bit of floor friction
          b.vx *= 0.985;
        }

        // Air drag and speed clamp
        b.vx *= airDrag;
        b.vy *= airDrag;
        let speed = Math.hypot(b.vx, b.vy);
        if (speed > maxSpeed) {
          const s = maxSpeed / speed;
          b.vx *= s;
          b.vy *= s;
        }
        // Enforce a minimum speed so balls never stop
        const minSpeed = randomPhase ? minSpeedTravel : minSpeedGravity;
        speed = Math.hypot(b.vx, b.vy);
        if (speed < minSpeed) {
          if (speed > 1e-3) {
            const s = minSpeed / Math.max(speed, 1e-3);
            b.vx *= s;
            b.vy *= s;
          } else {
            // If completely stopped, kick in a small arbitrary direction
            const angle = Math.random() * Math.PI * 2;
            b.vx = Math.cos(angle) * minSpeed;
            b.vy = Math.sin(angle) * minSpeed * (randomPhase ? 1 : 0.3);
          }
        }
      }

      // Ball-ball collisions using impulse-based resolution with momentum
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const a = balls[i];
          const b = balls[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.hypot(dx, dy);
          const minDist = a.r + b.r;
          if (dist > 0 && dist < minDist) {
            const nx = dx / dist;
            const ny = dy / dist;

            // Positional correction (split based on mass)
            const mA = a.r * a.r; // area proxy
            const mB = b.r * b.r;
            const invA = 1 / mA;
            const invB = 1 / mB;
            const overlap = minDist - dist;
            const percent = 0.8; // correction strength
            const slop = 0.01;
            const corr = Math.max(overlap - slop, 0) * (percent / (invA + invB));
            a.x -= nx * corr * invA;
            a.y -= ny * corr * invA;
            b.x += nx * corr * invB;
            b.y += ny * corr * invB;

            // Relative velocity along normal
            const rvx = b.vx - a.vx;
            const rvy = b.vy - a.vy;
            const velAlongNormal = rvx * nx + rvy * ny;
            if (velAlongNormal > 0) {
              continue; // already separating
            }

            // Compute impulse scalar
            const j = (-(1 + restitution) * velAlongNormal) / (invA + invB);
            const impX = j * nx;
            const impY = j * ny;

            // Apply impulse
            a.vx -= impX * invA;
            a.vy -= impY * invA;
            b.vx += impX * invB;
            b.vy += impY * invB;
          }
        }
      }

      // Draw
      for (let b of balls) {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(step);
    }

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, [count]);

  return (
    <div
      ref={containerRef}
      className="mx-auto my-6 w-full max-w-3xl h-64 border-2 border-primary-300 dark:border-primary-700 rounded-lg bg-white/70 dark:bg-dark-lighter overflow-hidden shadow-sm"
    >
      <canvas ref={canvasRef} />
    </div>
  );
}


