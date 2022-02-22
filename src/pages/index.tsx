import { BannerHero, MyStacks } from "@/components";
import { Post } from "@/components/PostList";
import { PostInterface } from "@/interface/PostsInterface";
import { SEO } from "@/SEO";
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react";

import { MdCheckCircle, MdSettings } from "react-icons/md";

import { List, ListItem, ListIcon } from "@chakra-ui/react";

import { getAllPosts } from "./api/posts";
import { Animation } from "@/components";

export default function Home({ posts }) {
  return (
    <>
      <SEO
        title="Início"
        description="Site pessoal de um desenvolvedor FrontEnd"
      />
      <BannerHero />
      <Container maxW="container.xl">
        <Heading>Publicações</Heading>
        <Stack as="section">
          <Flex flexDir={{ base: "column", md: "row" }}>
            {posts?.map((el: PostInterface) => {
              return (
                <Post
                  key={el.slug}
                  slug={el.slug}
                  title={el.title}
                  createdAt={el.createdAt}
                  background={el.background}
                  description={el.description}
                  tags={el.tags}
                />
              );
            })}{" "}
          </Flex>
        </Stack>

        <Divider margin={"2rem"} />
        <Stack as="section">
          <Heading>O que eu faço?</Heading>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={{ base: "column", md: "row" }}
          >
            <Box>
              <Animation name={"coding2.json"} />
            </Box>
            <Box textAlign={"center"} marginBottom={"4rem"}>
              <Flex
                flexWrap={"wrap"}
                alignItems={"center"}
                justifyContent={"center"}
                marginBottom={"2rem"}
              >
                <MyStacks url="./images/html5.svg" name="HTML 5" />
                <MyStacks url="./images/css3.svg" name="CSS 3" />
                <MyStacks url="./images/javascript.svg" name="Javascript" />
                <MyStacks url="./images/typescript.svg" name="Typescript" />
                <MyStacks url="./images/react.svg" name="React JS" />
                <MyStacks url="./images/nextjs.svg" name="Next JS" />
                <MyStacks url="./images/yarn.svg" name="Yarn " />
                <MyStacks url="./images/git.svg" name="Git" />
                <MyStacks url="./images/docker.svg" name="Docker" />
              </Flex>

              <List spacing={3}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="blue.500" />
                  Desenvolvo sites de alta performance e seguro
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="blue.500" />
                  Sites com layout 100% responsivo
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="blue.500" />
                  Sites com foco em SEO para ranqueamento no Google
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="blue.500" />
                  Integração com serviços de terceiros
                </ListItem>
              </List>
            </Box>
          </Flex>
        </Stack>
      </Container>
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
