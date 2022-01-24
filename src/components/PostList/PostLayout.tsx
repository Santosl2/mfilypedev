import { Flex } from "@/styles/components";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PostArticleLayout, PostLayoutContent } from "./styles";

interface PostLayoutProps {
  title: string;
  description: string;
  content: string;
}

interface IFastNavigation {
  navId: string;
  navStr: string;
}

export default function PostLayout(props: PostLayoutProps) {
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
    <>
      <PostArticleLayout>
        <Flex justifyContent="space-between" flexWrap="nowrap">
          <div className="box" style={{ width: "50%" }}>
            <div id="boxFixed">
              <span>Navegação rápida</span>
              <ul>
                {fastNavigation?.map(lists => {
                  return (
                    <Link href={`#${lists.navId}`} key={lists.navId}>
                      <li>{lists.navStr}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="box">
            <PostLayoutContent id="articleBody">
              {props?.title}
              <div dangerouslySetInnerHTML={{ __html: props?.content }} />
            </PostLayoutContent>
          </div>
        </Flex>
      </PostArticleLayout>
    </>
  );
}
