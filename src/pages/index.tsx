import { Footer } from "@/components/Footer";
import { PostList } from "@/components/PostList";
import { SEO } from "@/SEO";
import { Box, Container, Flex, Title } from "@/styles/components";
import {
  AboutMe,
  LeftContent,
  MyPicture,
  RightContent,
} from "@/styles/index.style";
import Link from "next/link";
import { Content } from "@/styles/components";

import { getAllPosts } from "./api/posts";
import { MyProjects } from "@/components/MyProjects";

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
        title="Início"
        description="Site pessoal de um desenvolvedor FrontEnd"
      />

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
              src="/images/mfilype.jpg"
            />
          </RightContent>
        </AboutMe>
      </Container>
      <Box withBg>
        <Content>
          <Title>
            <h5>Postagens recentes</h5>
            <Link href="/posts">Veja todos</Link>
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

      <MyProjects />

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
