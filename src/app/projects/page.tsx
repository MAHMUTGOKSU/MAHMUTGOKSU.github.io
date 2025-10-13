import Link from "next/link";
import { getAllPosts } from "@/src/lib/mdx";

export default async function ProjectsPage() {
  const projects = await getAllPosts("projects");

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
        Projects
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
        Machine learning projects, research implementations, and experiments.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="border-2 border-primary-300 dark:border-primary-600 rounded-lg p-6 hover:shadow-lg hover:shadow-primary-500/50 hover:border-primary-400 dark:hover:border-primary-400 transition bg-white dark:bg-dark-lighter"
          >
            <h2 className="text-2xl font-bold mb-3 text-secondary-900 dark:text-primary-400">
              {project.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            {project.tags && (
              <div className="flex gap-2 flex-wrap mb-3">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {project.github && (
              <div className="text-sm text-primary-500 hover:text-primary-600 font-medium">
                View on GitHub →
              </div>
            )}
          </Link>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Projects coming soon! Check back later.
          </p>
        </div>
      )}
    </div>
  );
}

