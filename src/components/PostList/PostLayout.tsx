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
    const findNavigation = props.content;
    const pattern = /(<h[1-6]) (id="[a-z]{0,}")(>)[a-z]{0,}(<\/h[1-6]>)/gim; // pick all h`s
    const patternT = /(["][(a-z)]{0,}["])>([a-z]{0,})/gim;

    findNavigation?.match(pattern).map(el => {
      const reg = patternT?.exec(el);
      if (reg) {
        const [, id, title] = reg;

        setFastNavigation(prev => [
          ...prev,
          {
            navId: id.replace(/(")/g, ""),
            navStr: title.toLowerCase(),
          },
        ]);
      }
    });
  }, [props.content]);

  return (
    <>
      <PostArticleLayout>
        <Flex justifyContent="space-between">
          <div className="box" style={{ width: "40%" }}>
            <div id="boxFixed">
              <span>Navegação rápida</span>
              <ul>
                {fastNavigation?.map(lists => {
                  return (
                    <Link href={`#${lists.navStr}`}>
                      <li key={lists.navId}>{lists.navStr}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
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
