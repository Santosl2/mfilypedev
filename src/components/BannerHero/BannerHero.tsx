import {
  Button,
  Flex,
  Stack,
  VStack,
  Text,
  useBreakpointValue,
  Heading,
  Icon,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { Animation } from "@/components/Animation";
import { FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";

export function BannerHero(): JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <Flex w={"full"} minH={"80vh"} background={"gray.700"}>
      <VStack
        position={"relative"}
        w={"full"}
        justify={"center"}
        flexDirection={useBreakpointValue({ base: "column", md: "row" })}
        px={useBreakpointValue({ base: 4, md: 8 })}
        marginTop={{ base: "5rem", md: "initial" }}
      >
        <Stack
          maxW={"600px"}
          align={"flex-start"}
          spacing={6}
          marginTop={"1rem"}
          marginRight={3}
        >
          <Heading color={"#fff"} fontFamily={"Lato"}>
            Ei, eu sou o Matheus Filype
          </Heading>
          <Text
            color={"white"}
            fontWeight={100}
            lineHeight={1.4}
            maxW={550}
            fontSize={useBreakpointValue({ base: "sm", md: "md" })}
          >
            Um desenvolvedor FrontEnd apaixonado com experiência na construção
            de aplicativos web com JavaScript / TypeScript / React JS / Next JS.
            Atualmente venho estudando Node JS para construção de API's.
          </Text>
          <Stack direction={"row"}>
            <Button
              onClick={() => {
                window.open(process.env.GITHUB_URL);
              }}
              bg={"gray.800"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "gray.900" }}
            >
              <Icon as={FaGithub} />
            </Button>
            <Button
              onClick={() => {
                window.open(process.env.LINKEDIN_URL);
              }}
              bg={"blue.700"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.800" }}
            >
              <Icon as={FaLinkedinIn} />
            </Button>
          </Stack>
        </Stack>
        <Stack maxW={"900px"} align={"center"} spacing={6}>
          <Animation name="programming.json" />
        </Stack>

        <Flex
          position={"absolute"}
          bottom={"0"}
          maxW={"100%"}
          height={{ base: 50, md: 100 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              fill={useColorModeValue("#fff", "#1A202C")}
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </Flex>
      </VStack>
    </Flex>
  );
}
