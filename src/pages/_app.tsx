import { Header } from "@/components";
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/custom.scss";
import { Footer } from "@/components";
import "highlight.js/scss/atom-one-light.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
