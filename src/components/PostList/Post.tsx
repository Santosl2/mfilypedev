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
import { FormatDate } from "@/utils/FormatDate";
import { PostInterface } from "@/interface/PostsInterface";

export function Post({
  title,
  description,
  background = "background.jpg",
  slug,
  tags = "Blog",
  createdAt,
}: PostInterface) {
  return (
    <Center
      py={6}
      onClick={() => {
        window.location.href = slug;
      }}
    >
      <ScaleFade initialScale={0.9} in={true}>
        <Box
          cursor={"pointer"}
          w={{ base: "100%", md: "25rem" }}
          h={{ base: "auto", md: "31rem" }}
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
            <Text
              color={"green.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
            >
              {tags.split(",").map(tag => {
                return (
                  <Badge colorScheme="green" marginRight={2}>
                    {tag}
                  </Badge>
                );
              })}
            </Text>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              {title}
            </Heading>
            <Text color={"gray.500"}>{description}</Text>
          </Stack>
          <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
            <Avatar
              src={"https://avatars.githubusercontent.com/u/67132916?v=4"}
            />
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text fontWeight={600}>Matheus Filype</Text>
              <Text color={"gray.500"}>{FormatDate(Number(createdAt))}</Text>
            </Stack>
          </Stack>
        </Box>
      </ScaleFade>
    </Center>
  );
}
