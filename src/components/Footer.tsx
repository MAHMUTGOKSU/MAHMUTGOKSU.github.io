export default function Footer() {
  return (
    <footer className="border-t-2 border-secondary-200 dark:border-secondary-800 mt-12 bg-white dark:bg-dark">
      <div className="container mx-auto px-4 py-6 max-w-5xl">
        <div className="flex justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Mahmut Zahid Göksu. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/MAHMUTGOKSU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition font-medium"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/mahmutzahidgoksu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition font-medium"
            >
              LinkedIn
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition font-medium"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

