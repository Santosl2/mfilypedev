import { Project, ProjectTitle } from "./style";
import Image from "next/image";

interface IMyProjectProps {
  description: string;
  html_url: string;
  full_name: string;
  language: string;
}

export function ProjectBox({
  description,
  html_url,
  full_name,
  language,
}: IMyProjectProps) {
  const icon = language ? `${language.toLowerCase()}-plain` : "github-original";

  return (
    <Project onClick={() => window.open(html_url, "_blank")}>
      <ProjectTitle>
        <small>
          <Image
            alt={language ?? "Blog para estudar programação"}
            width={20}
            height={20}
            src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${icon.replace(
              /-(plain|original)/gi,
              "",
            )}/${icon}.svg`}
          />
        </small>
        <h5>{full_name}</h5>
      </ProjectTitle>
      <p>{description}</p>
    </Project>
  );
}
