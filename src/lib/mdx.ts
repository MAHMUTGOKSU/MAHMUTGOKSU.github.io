import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDirectory = path.join(process.cwd(), "src", "content");

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
  readingTime?: string;
  content: string;
  [key: string]: any;
}

export async function getAllPosts(type: "blog" | "papers" | "projects"): Promise<Post[]> {
  const postsDirectory = path.join(contentDirectory, type);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        content,
        readingTime: stats.text,
        ...data,
      } as Post;
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostBySlug(
  type: "blog" | "papers" | "projects",
  slug: string
): Promise<Post | null> {
  try {
    const postsDirectory = path.join(contentDirectory, type);
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    
    let fileContents;
    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, "utf8");
    } else {
      const mdPath = path.join(postsDirectory, `${slug}.md`);
      fileContents = fs.readFileSync(mdPath, "utf8");
    }

    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      content,
      readingTime: stats.text,
      ...data,
    } as Post;
  } catch (error) {
    return null;
  }
}

