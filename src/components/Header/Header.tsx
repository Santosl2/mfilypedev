import { ReactNode, useEffect, useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Links = [
  {
    id: 1,
    location: process.env.GITHUB_URL,
    component: <FaGithub />,
  },
  {
    id: 2,
    location: process.env.LINKEDIN_URL,
    component: <FaLinkedin />,
  },
];

const NavLink = ({ children, link }: { children: ReactNode; link: string }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "underline",
    }}
    href={link}
    target={"_blank"}
  >
    {children}
  </Link>
);

export function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (window.outerWidth <= 768) {
      setIsFixed(true);
      return;
    }

    window.addEventListener("scroll", event => {
      if (window.pageYOffset > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <>
      <Box
        position={"fixed"}
        width={"100%"}
        zIndex={10}
        px={4}
        top="0"
        backgroundColor={`${isFixed && "rgba(0, 0, 0, 0.65)"}`}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={{ base: "space-between", md: "space-around" }}
        >
          <HStack
            onClick={() => (window.location.href = "/")}
            spacing={8}
            alignItems={"center"}
            color="white"
            cursor={"pointer"}
          >
            <Box fontFamily={"Lato"} fontSize={24}>
              mfilype.dev
            </Box>
          </HStack>

          <HStack as={"nav"} spacing={4} display={"flex"} color={"white"}>
            {Links.map(link => (
              <NavLink key={link.id} link={link.location}>
                {link.component}
              </NavLink>
            ))}

            <Button background={"transparent"} onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
