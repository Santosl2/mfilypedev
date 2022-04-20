import { PostHero } from "@/components";
import { PostLayout } from "@/components";
import { Loading } from "@/components/Loading/Loading";
import { PostInterface } from "@/interface/PostsInterface";
import { SEO } from "@/SEO";
import { Container } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useEffect, useState } from "react";
import { getPostBySlug } from "./api/posts";

export default function Home(post: PostInterface) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [post.content]);
  return (
    <>
      <SEO
        title={post.title ?? "Publicação"}
        description={post.description}
        image={post.background}
      />
      {isLoading && <Loading />}
      <PostHero
        title={post.title}
        description={post.description}
        background={post.background}
      />

      <Container maxW="container.xl" marginTop={"5rem"}>
        <PostLayout
          title={post?.title}
          description={post?.description}
          content={post?.content}
          createdAt={post?.createdAt}
          tags={post?.tags}
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
