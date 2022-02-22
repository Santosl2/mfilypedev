import matter from "gray-matter";
import { marked } from "marked";
import hljs from "highlight.js";
import { PostInterface } from "@/interface/PostsInterface";

marked.setOptions({
  langPrefix: "hljs language-", // highlight.js css expects a top-level 'hljs' class.
  highlight: function (code) {
    return hljs.highlightAuto(code, ["typescript"]).value;
  },
});

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
      background: meta.data.background,
      tags: meta.data.tags,
    });
  }

  return posts
    .sort((a, b) => {
      return b.createdAt - a.createdAt;
    })
    .slice(0, limit);
}

export async function getPostBySlug(slug: string): Promise<PostInterface> {
  const fileContent = await import(`../../_posts/${slug}.md`);

  if (fileContent) {
    const meta = matter(fileContent.default);
    const content = marked(meta.content);

    return {
      title: meta.data.title,
      description: meta.data.description,
      createdAt: meta.data.created_at,
      tags: meta.data.tags,
      background: meta.data.background,
      content,
    };
  }
}
