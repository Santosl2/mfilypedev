import { Header } from "@/components/Header";
import Global from "@/styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
