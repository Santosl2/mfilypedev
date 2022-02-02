import { Header } from "@/components/Header";
import Global from "@/styles/global";
import Aos from "aos";
import "aos/dist/aos.css";

import "highlight.js/scss/atom-one-light.scss";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
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
