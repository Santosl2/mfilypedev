import { StacksInterface } from "@/interface/StacksInterface";
import { Box, Image, Tooltip, useColorModeValue } from "@chakra-ui/react";

export function MyStacks({ name, url }: StacksInterface): JSX.Element {
  return (
    <Tooltip label={name}>
      <Box
        p={"1rem"}
        bg={useColorModeValue("gray.100", "gray.900")}
        width={"60px"}
        margin={"1rem"}
        borderRadius={"full"}
      >
        <Image
          boxSize="30px"
          src={url}
          alt={`Linguagem de programação ${name}`}
        />
      </Box>
    </Tooltip>
  );
}
