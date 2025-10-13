import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/components/MDXComponents";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism-plus";

export async function generateStaticParams() {
  const papers = await getAllPosts("papers");
  return papers.map((paper) => ({
    slug: paper.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const paper = await getPostBySlug("papers", params.slug);
  if (!paper) return {};

  return {
    title: `${paper.title} | Paper Reviews`,
    description: paper.description,
  };
}

export default async function PaperReview({ params }: { params: { slug: string } }) {
  const paper = await getPostBySlug("papers", params.slug);

  if (!paper) {
    notFound();
  }

  const components = useMDXComponents({});

  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{paper.title}</h1>
        <div className="flex gap-4 text-gray-600 dark:text-gray-400 mb-4">
          <time>
            {new Date(paper.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {paper.readingTime && <span>· {paper.readingTime}</span>}
        </div>
        {paper.tags && (
          <div className="flex gap-2 flex-wrap">
            {paper.tags.map((tag: string) => (
              <span
                key={tag}
                className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MDXRemote
          source={paper.content}
          components={components}
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

