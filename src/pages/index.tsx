import { BannerHero } from "@/components";
import { Post } from "@/components/PostList";
import { PostInterface } from "@/interface/PostsInterface";
import { SEO } from "@/SEO";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Container, Flex, useColorMode } from "@chakra-ui/react";
import { getAllPosts } from "./api/posts";

interface IPosts {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
}

export default function Home({ posts }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <SEO
        title="Início"
        description="Site pessoal de um desenvolvedor FrontEnd"
      />
      <BannerHero />
      <Container maxW="container.xl">
        <Flex>
          {posts?.map((el: PostInterface) => {
            return (
              <Post
                key={el.slug}
                slug={el.slug}
                title={el.title}
                createdAt={el.createdAt}
                background="background.jpg"
                description={el.description}
                tags={el.tags}
              />
            );
          })}{" "}
        </Flex>
      </Container>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts({ limit: 3 });

  return {
    props: {
      posts,
    },
  };
}
