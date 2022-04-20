import { Spinner, Stack } from "@chakra-ui/react";

export function Loading() {
  return (
    <Stack
      direction="row"
      spacing={4}
      position={"absolute"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      height={"100vh"}
      background={"rgba(0, 0, 0, 0.95)"}
      zIndex={10}
    >
      <Spinner size="xl" emptyColor="gray.200" />
    </Stack>
  );
}
