import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/src/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { customMDXComponents } from "@/src/components/MDXComponents";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism-plus";

export async function generateStaticParams() {
  const projects = await getAllPosts("projects");
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = await getPostBySlug("projects", params.slug);
  if (!project) return {};

  return {
    title: `${project.title} | Projects`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getPostBySlug("projects", params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
          {project.title}
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex gap-4 text-gray-600 dark:text-gray-400 mb-4 flex-wrap items-center">
          {project.date && (
            <time>
              {new Date(project.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
          {project.github && (
            <>
              <span>·</span>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-600 font-medium"
              >
                GitHub Repository →
              </a>
            </>
          )}
          {project.demo && (
            <>
              <span>·</span>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-600 font-medium"
              >
                Live Demo →
              </a>
            </>
          )}
        </div>
        {project.tags && (
          <div className="flex gap-2 flex-wrap">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="bg-primary-100 dark:bg-secondary-900 text-secondary-800 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MDXRemote
          source={project.content}
          components={customMDXComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkMath],
              rehypePlugins: [rehypeKatex, rehypePrism],
            },
          }}
        />
      </div>
    </article>
  );
}

