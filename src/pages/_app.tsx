import { Header } from "@/components/Header";
import Global from "@/styles/global";
import "highlight.js/scss/atom-one-light.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
