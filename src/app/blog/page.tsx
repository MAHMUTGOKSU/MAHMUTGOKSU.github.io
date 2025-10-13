import Link from "next/link";
import { getAllPosts } from "@/src/lib/mdx";

export default async function BlogPage() {
  const posts = await getAllPosts("blog");

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
        Thoughts on events, technology, and machine learning.
      </p>

      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border-b border-primary-300 dark:border-primary-700 pb-8 last:border-b-0"
          >
            <Link href={`/blog/${post.slug}`} className="group">
              <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition">
                {post.title}
              </h2>
              <div className="flex gap-4 text-sm text-gray-500 mb-3">
                <time>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                {post.readingTime && <span>· {post.readingTime}</span>}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {post.description}
              </p>
              {post.tags && (
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-center text-gray-500 py-12">
          No blog posts yet. Check back soon!
        </p>
      )}
    </div>
  );
}

