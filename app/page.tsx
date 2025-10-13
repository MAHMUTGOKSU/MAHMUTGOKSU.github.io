import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default async function Home() {
  const blogPosts = await getAllPosts("blog");
  const papers = await getAllPosts("papers");

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold mb-4">Mahmut Zahid Göksu</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          Machine Learning Engineer & Researcher
        </p>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Welcome to my personal space where I share my CV, thoughts on events,
          and in-depth paper reviews. Exploring the intersection of machine learning,
          research, and practical applications.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/cv"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View CV
          </Link>
          <Link
            href="/blog"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Read Blog
          </Link>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Recent Thoughts</h2>
          <Link href="/blog" className="text-blue-600 hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.slice(0, 4).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="border rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {post.description}
              </p>
              <div className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Paper Reviews */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Paper Reviews</h2>
          <Link href="/papers" className="text-blue-600 hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {papers.slice(0, 4).map((paper) => (
            <Link
              key={paper.slug}
              href={`/papers/${paper.slug}`}
              className="border rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {paper.description}
              </p>
              <div className="flex gap-4 text-sm text-gray-500">
                {paper.tags && (
                  <div className="flex gap-2">
                    {paper.tags.slice(0, 3).map((tag: string) => (
                      <span
                        key={tag}
                        className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
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
      </section>
    </div>
  );
}

