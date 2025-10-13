import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 py-6 max-w-5xl">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            MZG
          </Link>
          <ul className="flex gap-8">
            <li>
              <Link
                href="/"
                className="hover:text-blue-600 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/cv"
                className="hover:text-blue-600 transition"
              >
                CV
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-blue-600 transition"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/papers"
                className="hover:text-blue-600 transition"
              >
                Papers
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

