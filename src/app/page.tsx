import Link from "next/link";
import { getAllPosts } from "@/src/lib/mdx";

export default async function Home() {
  const projects = await getAllPosts("projects");
  const papers = await getAllPosts("papers");

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent">
          Welcome !
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-6 text-gray-700 dark:text-gray-300 leading-relaxed text-left">
          This is my page where you will see my projects and paper reviews. The aim of this page is not for me to show myself to the world but to help me get motivated, to learn, build and explore new ideas. I love reading papers and I enjoy talking about them more. I have been struggling to talk to people so I came up with this idea: If I wrote about them they would stay with me forever. Every week I will be writing a review on a paper of my choosing, most probably relevant to what I am working on, and discuss the idea. The main goal is not to get everything correct but to understand as well as I can and communicate it to you reader (or me :). The content will not be AI generated in any way because I value my understanding and AI does not help that much for my case.
        </p>
        <p className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent max-w-3xl mx-auto mb-8 text-center">
          LETS GET STARTED...
        </p>
        <div className="flex justify-center">
          <Link
            href="/about"
            className="bg-gradient-to-r from-primary-400 to-primary-500 text-dark px-6 py-3 rounded-lg hover:from-primary-500 hover:to-primary-600 transition font-semibold shadow-lg"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Projects */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-secondary-800 dark:text-secondary-200">Projects</h2>
          <Link href="/projects" className="text-primary-500 hover:text-primary-600 font-semibold hover:underline">
            View all →
          </Link>
        </div>
        {projects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {projects.slice(0, 4).map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="border-2 border-primary-300 dark:border-primary-600 rounded-lg p-6 hover:shadow-lg hover:shadow-primary-500/50 hover:border-primary-400 dark:hover:border-primary-400 transition bg-white dark:bg-dark-lighter"
              >
                <h3 className="text-xl font-semibold mb-2 text-secondary-900 dark:text-primary-400">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags && project.tags.slice(0, 3).map((tag: string) => (
                    <span
                      key={tag}
                      className="bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-200 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border-2 border-dashed border-primary-300 dark:border-primary-700 rounded-lg">
            <p className="text-gray-500 dark:text-gray-400 mb-4">No projects yet. Start by creating your first one!</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Create: <code className="bg-secondary-100 dark:bg-secondary-900 px-2 py-1 rounded">src/content/projects/your-project.mdx</code>
            </p>
          </div>
        )}
      </section>

      {/* Recent Paper Reviews */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-secondary-800 dark:text-secondary-200">Paper Reviews</h2>
          <Link href="/papers" className="text-primary-500 hover:text-primary-600 font-semibold hover:underline">
            View all →
          </Link>
        </div>
        {papers.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {papers.slice(0, 4).map((paper) => (
              <Link
                key={paper.slug}
                href={`/papers/${paper.slug}`}
                className="border-2 border-primary-300 dark:border-primary-600 rounded-lg p-6 hover:shadow-lg hover:shadow-primary-500/50 hover:border-primary-400 dark:hover:border-primary-400 transition bg-white dark:bg-dark-lighter"
              >
                <h3 className="text-xl font-semibold mb-2 text-secondary-900 dark:text-primary-400">{paper.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {paper.description}
                </p>
                <div className="flex gap-4 text-sm text-gray-500">
                  {paper.tags && (
                    <div className="flex gap-2">
                      {paper.tags.slice(0, 3).map((tag: string) => (
                        <span
                          key={tag}
                          className="bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-200 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border-2 border-dashed border-primary-300 dark:border-primary-700 rounded-lg">
            <p className="text-gray-500 dark:text-gray-400 mb-4">No paper reviews yet. Start by reviewing your first paper!</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Create: <code className="bg-secondary-100 dark:bg-secondary-900 px-2 py-1 rounded">src/content/papers/your-review.mdx</code>
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

