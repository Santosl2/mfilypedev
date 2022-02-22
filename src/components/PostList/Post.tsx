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
      <Box
        cursor={"pointer"}
        w={"400px"}
        h={"500px"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        marginRight={"1rem"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image
            src={
              "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            layout={"fill"}
          />
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
    </Center>
  );
}
