import { Flex } from "@/styles/components";
import { PostArticleLayout, PostLayoutContent } from "./styles";

interface PostLayoutProps {
  title: string;
  description: string;
  content: string;
}

export default function PostLayout(props: PostLayoutProps) {
  return (
    <>
      <PostArticleLayout>
        <Flex justifyContent="space-between">
          <div className="box" style={{ width: "40%" }}>
            <span>Navegação rápida</span>
            <ul>
              <li>INDEX 1</li>
              <li>INDEX 2</li>
              <li>INDEX 3</li>
              <li>f</li>
              <li>f</li>
              <li>f</li>
            </ul>
          </div>

          <div className="box">
            <PostLayoutContent id="articleBody">
              <h1>{props.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: props.content }} />
            </PostLayoutContent>
          </div>
        </Flex>
      </PostArticleLayout>
    </>
  );
}
