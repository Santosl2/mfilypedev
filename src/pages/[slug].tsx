import { PostHero } from "@/components";
import { PostLayout } from "@/components";
import { PostInterface } from "@/interface/PostsInterface";
import { SEO } from "@/SEO";
import { Container } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { getPostBySlug } from "./api/posts";

export default function Home(post: PostInterface) {
  return (
    <>
      <SEO title={post.title ?? "Publicação"} description={post.description} />
      <PostHero
        title={post.title}
        description={post.description}
        background={post.background}
      />

      <Container maxW="container.xl" marginTop={"5rem"}>
        <PostLayout
          title={post.title}
          description={post.description}
          content={post.content}
          createdAt={post.createdAt}
          tags={post.tags}
        />
      </Container>

      <br />
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
