import Link from "next/link";
import { FooterContent, FooterSection } from "./styles";

export function Footer() {
  return (
    <FooterSection>
      <FooterContent>
        <p>© 2022 - Matheus Filype </p>
        <ul>
          <li>
            <Link href="">Twitter</Link>
          </li>
          <li>
            <Link href="">
              <a rel="noopener" target={"_blank"}>
                GitHub
              </a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a rel="noopener" target={"_blank"}>
                LinkedIn
              </a>
            </Link>
          </li>
        </ul>
      </FooterContent>
    </FooterSection>
  );
}
