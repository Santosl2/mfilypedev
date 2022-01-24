import { Footer } from "@/components/Footer";
import PostLayout from "@/components/PostList/PostLayout";
import { SEO } from "@/SEO";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { getPostBySlug } from "./api/posts";

interface IPostContentProps {
  description: string;
  title: string;
  content: string;
  createdAt: number;
}

export default function Home(post: IPostContentProps) {
  return (
    <>
      <SEO title={post.title ?? "Publicação"} description={post.description} />
      <PostLayout
        title={post.title}
        description={post.description}
        content={post.content}
        createdAt={post.createdAt}
      />

      <Footer />
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
  const { slug } = ctx.params;
  let props = {};

  if (slug) {
    try {
      props = await getPostBySlug(ctx.params.slug.toString());
    } catch {
      return {
        notFound: true,
      };
    }
  }

  return {
    props,
  };
};
