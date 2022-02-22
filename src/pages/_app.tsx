import { Header } from "@/components";
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/custom.css";
import { Footer } from "@/components";

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
