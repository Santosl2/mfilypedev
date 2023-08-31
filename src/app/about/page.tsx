"use client";

import { Wrapper } from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <Wrapper>
      <div className="flex items-center gap-7 flex-col mt-10 md:flex-row">
        <div className="flex-1">
          <h3 className="text-purple-500">About me</h3>
          <p>
            {" "}
            My name is Matheus Filype, a FrontEnd Developer, passionate about
            finances, programming and reading. I'm 19 years old based in
            Ipatinga, Minas Gerais. I have a some knowledges in Backend
            Development{" "}
            <small>(PHP, C#, SQL, Node JS, Laravel, Code Igniter)</small>, but
            my main focus in FrontEnd Development.
          </p>
          <br />
          <p>
            I started in the developing world in 2014, when I was 11 years old,
            since then I never stopped learning. I started with HTML, CSS and
            PHP, then I learned JavaScript and jQuery. Years after I started to
            learn React and Typescript and others. In 2021 I started my college
            of Systems Analysis and Development.
          </p>
          <br />
          <p>
            You can see my projects on my{" "}
            <Link href="https://github.com/Santosl2/" target="_blank">
              GitHub
            </Link>{" "}
            <small>
              {" "}
              (unfortunately it doesn't have all the ones I've already
              developed, which were + 100 projects).
            </small>
          </p>
          <p>
            And you can see my resume in this{" "}
            <Link href="https://www.linkedin.com/in/mfilype/" target="_blank">
              link
            </Link>{" "}
          </p>
        </div>
        <div className="basis-56">
          <Image
            src="/images/mfilype.jpg"
            alt="mfilype.dev Picture"
            className="rounded shadow"
            loading="lazy"
            width={300}
            height={300}
          />
        </div>
      </div>
    </Wrapper>
  );
}
