import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Badge,
  Link,
  ScaleFade,
} from "@chakra-ui/react";
import { ProjectsInterface } from "@/interface/ProjectsInterface";

export function Projects({
  title,
  url,
  background = "background.jpg",
  isOnline,
}: ProjectsInterface) {
  return (
    <Center
      py={6}
      onClick={() => {
        window.location.href = url;
      }}
    >
      <ScaleFade initialScale={0.9} in={true}>
        <Box
          cursor={"pointer"}
          w={{ base: "100%", md: "24rem" }}
          h={{ base: "auto", md: "20rem" }}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
          marginRight={"1rem"}
          transition={"all 0.3s ease"}
          _hover={{ transform: "scale(1.12)" }}
        >
          <Box
            h={"210px"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
          >
            <Image src={background} layout={"fill"} />
          </Box>
          <Stack>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              {title} {isOnline && <Badge colorScheme={"green"}>Online</Badge>}
              {!isOnline && (
                <Badge colorScheme={"red"}>Em desenvolvimento...</Badge>
              )}
            </Heading>

            <Text color={"gray.500"}>{url}</Text>
          </Stack>
        </Box>
      </ScaleFade>
    </Center>
  );
}
