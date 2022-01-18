import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { PostList } from "@/components/PostList";
import PostLayout from "@/components/PostList/PostLayout";
import { SEO } from "@/SEO";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { getAllPosts, getPostBySlug } from "./api/posts";

interface IPostContentProps {
  description: string;
  title: string;
  content: string;
}

export default function Home(post: IPostContentProps) {
  console.log(post.title);
  return (
    <>
      <SEO title="Início" />
      <Header />

      <PostLayout
        title={post.title}
        description={post.description}
        content={post.content}
      />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext,
) => {
  return {
    props: await getPostBySlug(ctx.params.slug.toString()),
  };
};
