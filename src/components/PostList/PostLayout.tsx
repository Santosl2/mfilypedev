import { Flex } from "@/styles/components";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  PostArticleLayout,
  PostLayoutContent,
  PostLayoutTitle,
  ShareButton,
} from "./styles";
import { FaLink, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FormatDate } from "@/utils/FormatDate";
interface PostLayoutProps {
  title: string;
  description: string;
  content: string;
  createdAt: number;
}

interface IFastNavigation {
  navId: string;
  navStr: string;
}

export default function PostLayout(props: PostLayoutProps) {
  const [fastNavigation, setFastNavigation] = useState<IFastNavigation[]>([]);

  const sharePublication = async (type: string) => {
    let shareData = {
      title: props.title,
      description: props.description,
      url: window.location.href,
    };

    try {
      switch (type) {
        case "twitter":
          window.open(
            `https://twitter.com/intent/tweet?url=${shareData.url}&text=${shareData.title}`,
          );
          break;

        case "linkedin":
          window.open(`
            https://www.linkedin.com/shareArticle?url=${shareData.url}&mini=true&title=${shareData.title}
          `);
          break;

        default:
          await navigator.share(shareData);
          break;
      }
    } catch {}
  };

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
              <PostLayoutTitle>
                <small>{FormatDate(props.createdAt)}</small>
                <h1>{props?.title}</h1>
              </PostLayoutTitle>

              <div dangerouslySetInnerHTML={{ __html: props?.content }} />
            </PostLayoutContent>

            <h6> Compartilhe </h6>
            <Flex>
              <ShareButton
                onClick={() => {
                  sharePublication("linkedin");
                }}
                color="white"
                socialColor="#0A66C2"
              >
                <FaLinkedin size={24} />
              </ShareButton>
              <ShareButton
                onClick={() => {
                  sharePublication("twitter");
                }}
                color="white"
                socialColor="#1D9BF0"
              >
                <FaTwitter size={24} />
              </ShareButton>
              <ShareButton
                onClick={() => {
                  sharePublication("");
                }}
                color="white"
                socialColor="#4A5240"
              >
                <FaLink size={24} />
              </ShareButton>
            </Flex>
          </div>
        </Flex>
      </PostArticleLayout>
    </>
  );
}
