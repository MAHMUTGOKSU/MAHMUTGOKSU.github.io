import Link from "next/link";
import { getAllPosts } from "@/src/lib/mdx";

export default async function PapersPage() {
  const papers = await getAllPosts("papers");

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Paper Reviews</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
        In-depth reviews and analyses of machine learning research papers.
      </p>

      <div className="space-y-8">
        {papers.map((paper) => (
          <article
            key={paper.slug}
            className="border-b pb-8 last:border-b-0"
          >
            <Link href={`/papers/${paper.slug}`} className="group">
              <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition">
                {paper.title}
              </h2>
              <div className="flex gap-4 text-sm text-gray-500 mb-3">
                <time>
                  {new Date(paper.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                {paper.readingTime && <span>· {paper.readingTime}</span>}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {paper.description}
              </p>
              {paper.tags && (
                <div className="flex gap-2 flex-wrap">
                  {paper.tags.map((tag: string) => (
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

      {papers.length === 0 && (
        <p className="text-center text-gray-500 py-12">
          No paper reviews yet. Check back soon!
        </p>
      )}
    </div>
  );
}

