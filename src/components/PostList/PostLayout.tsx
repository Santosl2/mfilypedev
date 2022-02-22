import { PostInterface } from "@/interface/PostsInterface";
import styles from "./customStyles.module.scss";
import {
  Box,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

type IFastNavigation = {
  navId: string;
  navStr: string;
};
export function PostLayout(props: PostInterface): JSX.Element {
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
        <Box
          width={"20%"}
          position={"sticky"}
          top="10%"
          height={"500px"}
          display={{ base: "none", md: "initial" }}
        >
          <Heading>Menu</Heading>
          <List spacing={5}>
            {fastNavigation?.map(lists => {
              return (
                <ListItem key={lists.navId}>
                  <Link href={`#${lists.navId}`}>
                    <li>{lists.navStr}</li>
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box width={{ base: "100%", md: "60%" }} id="section">
          <div dangerouslySetInnerHTML={{ __html: props?.content }} />
        </Box>
      </Flex>
    </Stack>
  );
}
