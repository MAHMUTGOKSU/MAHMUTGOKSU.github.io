import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/components/MDXComponents";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism-plus";

export async function generateStaticParams() {
  const posts = await getAllPosts("blog");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug("blog", params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Mahmut Zahid Göksu`,
    description: post.description,
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug("blog", params.slug);

  if (!post) {
    notFound();
  }

  const components = useMDXComponents({});

  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex gap-4 text-gray-600 dark:text-gray-400 mb-4">
          <time>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {post.readingTime && <span>· {post.readingTime}</span>}
        </div>
        {post.tags && (
          <div className="flex gap-2 flex-wrap">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MDXRemote
          source={post.content}
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

