export default function Footer() {
  return (
    <footer className="border-t mt-12">
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
              className="text-gray-600 hover:text-blue-600 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/mahmutzahidgoksu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

