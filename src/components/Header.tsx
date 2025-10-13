import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b-2 border-primary-400 dark:border-primary-500 bg-white dark:bg-dark shadow-sm">
      <nav className="container mx-auto px-4 py-6 max-w-5xl">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent hover:from-primary-500 hover:to-secondary-600 transition">
            MZG
          </Link>
          <ul className="flex gap-8">
            <li>
              <Link
                href="/"
                className="text-secondary-700 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400 transition font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/cv"
                className="text-secondary-700 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400 transition font-medium"
              >
                CV
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-secondary-700 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400 transition font-medium"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/papers"
                className="text-secondary-700 dark:text-secondary-300 hover:text-primary-500 dark:hover:text-primary-400 transition font-medium"
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

