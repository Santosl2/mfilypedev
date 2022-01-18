import { SEO } from "@/SEO";
import styles from "./styles.module.scss";

interface PostLayoutProps {
  title: string;
  description: string;
  content: string;
}

export default function PostLayout(props: PostLayoutProps) {
  return (
    <main>
      <SEO title={props.title} description={props.description} />
      <article id={styles.postLayout}>
        <h1>{props.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
      </article>
    </main>
  );
}
