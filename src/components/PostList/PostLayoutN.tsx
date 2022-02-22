import { PostInterface } from "@/interface/PostsInterface";
import { Box, Flex, List, ListItem, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type IFastNavigation = {
  navId: string;
  navStr: string;
};
export function PostLayoutN(props: PostInterface): JSX.Element {
  const [fastNavigation, setFastNavigation] = useState<IFastNavigation[]>([]);

  useEffect(() => {
    const findNavigation = props?.content;

    if (findNavigation) {
      const pattern = /<h[1-6] id="([\w\sáíãç-]+)">(.+)(<)/gim; // pick all h`s

      findNavigation?.match(pattern).map(el => {
        const [, , id, title] = /("([\w\sáíãç-]+)">(.+)(<))/gim.exec(el);
        if (id && title) {
          setFastNavigation(prev => [
            ...prev,
            {
              navId: id,
              navStr: title,
            },
          ]);
        }
      });
    }
  }, [props.content]);

  return (
    <Stack as="section">
      <Flex justifyContent={"center"}>
        <Box width={"20%"}>
          <List spacing={3}>
            {fastNavigation?.map(lists => {
              return (
                <ListItem key={lists.navId}>
                  <li>{lists.navStr}</li>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box width={"60%"}>
          {" "}
          {props.background}
          <div dangerouslySetInnerHTML={{ __html: props?.content }} />
        </Box>
      </Flex>
    </Stack>
  );
}
