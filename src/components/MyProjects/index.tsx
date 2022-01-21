import { Box, Content, Flex, Title } from "@/styles/components";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProjectBox } from "./ProjectBox";

interface IMyProjectProps {
  description: string;
  html_url: string;
  full_name: string;
  language: string;
}

export function MyProjects() {
  const [myProjects, setMyProjects] = useState<IMyProjectProps[]>();

  useEffect(() => {
    const api =
      "https://api.github.com/users/Santosl2/repos?per_page=50&sort=created&per_page=3";

    fetch(api)
      .then(response => response.json())
      .then(response => setMyProjects(response));
  }, []);

  return (
    <Box withBg>
      <Content>
        <Title>
          <h5>Meus últimos projetos</h5>

          <Link href="https://github.com/Santosl2">
            <a target={"_blank"} rel={"noopener"}>
              {" "}
              Veja todos{" "}
            </a>
          </Link>
        </Title>
        <Flex>
          {myProjects?.map(el => {
            return (
              <ProjectBox
                key={el.html_url}
                description={el.description}
                html_url={el.html_url}
                full_name={el.full_name}
                language={el.language}
              />
            );
          })}
        </Flex>
      </Content>
    </Box>
  );
}
