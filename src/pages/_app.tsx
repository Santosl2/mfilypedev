import { Header } from "@/components";
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/custom.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
