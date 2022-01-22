import matter from "gray-matter";
import { marked } from "marked";

interface IProps {
  title: string;
  description: string;
  content: string;
  createdAt: number;
}

interface IPostProps {
  limit?: number;
}

export async function getAllPosts({ limit }: IPostProps) {
  const context = require.context("../../_posts", false, /\.md$/);
  const posts = [];

  for (const key of context.keys()) {
    const post = key.slice(2);
    const postContent = await import(`../../_posts/${post}`);
    const meta = matter(postContent.default);

    posts.push({
      slug: post.replace(".md", ""),
      title: meta.data.title,
      description: meta.data.description,
      createdAt: meta.data.created_at,
    });
  }

  return posts;
}

export async function getPostBySlug(slug: string): Promise<IProps> {
  const fileContent = await import(`../../_posts/${slug}.md`);

  if (fileContent) {
    const meta = matter(fileContent.default);
    const content = marked(meta.content);

    return {
      title: meta.data.title,
      description: meta.data.description,
      createdAt: meta.data.created_at,
      content,
    };
  }
}
