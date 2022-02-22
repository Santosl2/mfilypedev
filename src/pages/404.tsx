import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export default function Error() {
  return (
    <Flex
      flexDir="column"
      alignItems={"center"}
      justifyContent={"center"}
      textAlign="center"
      py={10}
      px={6}
      width={"100%"}
      height={"100vh"}
    >
      <Box display="inline-block">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg={"red.500"}
          rounded={"50px"}
          w={"55px"}
          h={"55px"}
          textAlign="center"
        >
          <CloseIcon boxSize={"20px"} color={"white"} />
        </Flex>
      </Box>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Não encontrado
      </Heading>
      <Text color={"gray.500"}>
        Oops, a página que você está tentando acessar não foi encontrada.
      </Text>
    </Flex>
  );
}
