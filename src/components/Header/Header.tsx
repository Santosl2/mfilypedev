import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box position={"fixed"} width={"100%"} zIndex={10} px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={{ base: "space-between", md: "space-around" }}
        >
          <HStack spacing={8} alignItems={"center"} color="white">
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
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
