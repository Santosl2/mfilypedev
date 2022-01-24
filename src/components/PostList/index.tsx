import Link from "next/link";
import { Post, PostContent, PostDescription, PostInfo } from "./styles";
import { FormatDate } from "@/utils/FormatDate";

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
            <span>{FormatDate(Number(createdAt))}</span>
            <span>React, Next</span>
          </PostInfo>
          <h6>{title}</h6>

          <PostDescription>{description}</PostDescription>
        </PostContent>
      </Post>
    </Link>
  );
}
