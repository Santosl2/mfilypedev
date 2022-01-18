import { Footer } from "@/components/Footer";
import { PostList } from "@/components/PostList";
import { SEO } from "@/SEO";
import { Box, Container, Flex } from "@/styles/components";
import {
  AboutMe,
  LeftContent,
  MyPicture,
  RecentPosts,
  RecentPostsHead,
  RightContent,
} from "@/styles/index.style";
import Link from "next/link";
import { getAllPosts } from "./api/posts";

interface IPosts {
  slug: string;
  title: string;
  description: string;
}

export default function Home({ posts }) {
  return (
    <>
      <SEO title="Início" />

      <Container>
        <AboutMe>
          <LeftContent>
            <h4>
              Ei, eu sou o Matheus Filype, <br /> Desenvolvedor Front End
            </h4>
            <p>
              Atualmente sou desenvolvedor Front End. Atualmente estou
              trabalhando na{" "}
              <Link href="http://gethash.com.br">
                <a target={"_blank"} rel="noopener">
                  Get Hash
                </a>
              </Link>
              . Meu foco de estudo atual tem sido React (Next JS) + Typescript.
            </p>
            <p>
              É aqui que escrevo meus pensamentos longos sobre desenvolvimento,
              negócios e qualquer outra coisa que desperte meu interesse.
            </p>
          </LeftContent>
          <RightContent>
            <MyPicture
              alt="Desenvolvedor FrontEnd React"
              src="https://exame.com/wp-content/uploads/2018/10/brad-pitt-britain-allied-premiere.jpg"
            />
          </RightContent>
        </AboutMe>
      </Container>
      <Box>
        <RecentPosts>
          <RecentPostsHead>
            <h5>Postagens recentes</h5>
            <a> Veja todos </a>
          </RecentPostsHead>
          <Flex>
            {posts?.map((el: IPosts) => {
              return (
                <PostList
                  slug={el.slug}
                  title={el.title}
                  background="background.jpg"
                  description={el.description}
                />
              );
            })}{" "}
          </Flex>
        </RecentPosts>
      </Box>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
