import {
  Flex,
  Stack,
  VStack,
  useBreakpointValue,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { Animation } from "@/components/Animation";
import { FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";

export function PostHero({
  background,
  title,
  description,
}: {
  background: string;
  title: string;
  description: string;
}): JSX.Element {
  return (
    <Flex
      w={"full"}
      minH={"50vh"}
      background={"gray.700"}
      backgroundImage={`url("${background}")`}
      backgroundPosition={"center center"}
      backgroundSize={"cover"}
    >
      <VStack
        position={"relative"}
        w={"full"}
        justify={"center"}
        flexDirection={useBreakpointValue({ base: "column", md: "row" })}
        px={useBreakpointValue({ base: 4, md: 8 })}
        marginTop={{ base: "5rem", md: "initial" }}
        textAlign={"center"}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"600px"} align={"flex-start"} spacing={6} marginRight={3}>
          <Heading color={"#fff"} fontFamily={"Lato"}>
            {title}
          </Heading>
          <Text size={"md"}>{description}</Text>
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
