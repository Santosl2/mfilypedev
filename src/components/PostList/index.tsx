import styles from "./styles.module.scss";
import Link from "next/link";
import { Post, PostContent, PostDescription, PostInfo } from "./styles";
import { Flex } from "@/styles/components";
interface IParams {
  title: string;
  description: string;
  background: string;
  slug: string;
}

export function PostList({
  title,
  description,
  background = "background.jpg",
  slug,
}: IParams) {
  return (
    <Post>
      <PostContent>
        <PostInfo>
          <span>12 de Fevereiro</span>
          <span>React, Next</span>
        </PostInfo>
        <h6>{title}</h6>

        <PostDescription>{description}</PostDescription>
      </PostContent>
    </Post>
  );
}
