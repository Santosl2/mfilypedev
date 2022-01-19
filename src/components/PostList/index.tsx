import styles from "./styles.module.scss";
import Link from "next/link";
import { Post, PostContent, PostDescription, PostInfo } from "./styles";
import { Flex } from "@/styles/components";
interface IParams {
  title: string;
  description: string;
  background: string;
  slug: string;
  createdAt: string;
}

export function PostList({
  title,
  description,
  background = "background.jpg",
  slug,
  createdAt,
}: IParams) {
  return (
    <Link href={slug}>
      <Post>
        <PostContent>
          <PostInfo>
            <span>{new Date().toLocaleDateString("pt-BR")}</span>
            <span>React, Next</span>
          </PostInfo>
          <h6>{title}</h6>

          <PostDescription>{description}</PostDescription>
        </PostContent>
      </Post>
    </Link>
  );
}
