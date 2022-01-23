import { Footer } from "@/components/Footer";
import { PostList } from "@/components/PostList";
import { SEO } from "@/SEO";
import { Box, Flex, Title } from "@/styles/components";
import { Content } from "@/styles/components";
import { getAllPosts } from "./api/posts";

interface IPosts {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
}

export default function Home({ posts }) {
  return (
    <>
      <SEO
        title="Todas as publicações "
        description="Site pessoal de um desenvolvedor FrontEnd"
      />

      <Box withBg>
        <Content>
          <Title>
            <h5>Todas as postagens</h5>
          </Title>
          <Flex>
            {posts?.map((el: IPosts) => {
              return (
                <PostList
                  key={el.slug}
                  slug={el.slug}
                  title={el.title}
                  createdAt={el.createdAt}
                  background="background.jpg"
                  description={el.description}
                />
              );
            })}{" "}
          </Flex>
        </Content>
      </Box>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts({});

  return {
    props: {
      posts,
    },
  };
}
