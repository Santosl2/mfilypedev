import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Menu,
  MenuContent,
  HomeLink,
  Button,
  HamburgerIcon,
  SubMenu,
  SubMenuItem,
} from "./styles";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(prev => !prev);
    setIsActive(prev => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", e => {
      const scroll = window.scrollY;
      if (scroll > 90) {
        setIsActive(true);
        return;
      }

      setIsActive(false);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <Menu>
      <MenuContent isOpen={isActive}>
        <HomeLink>Matheus Filype</HomeLink>
        <Button aria-label="Menu Hamburger" onClick={handleMenuOpen}>
          <HamburgerIcon isOpen={menuOpen}>
            <span></span>
          </HamburgerIcon>
        </Button>
      </MenuContent>

      <SubMenu isOpen={menuOpen}>
        <SubMenuItem>
          <Link href="fdsfdsfsd">Sobre</Link>
        </SubMenuItem>
        <SubMenuItem>
          <Link href="fdsfdsfsd">Posts</Link>
        </SubMenuItem>
        <SubMenuItem>
          <Link href="fdsfdsfsd">fdsfs</Link>
        </SubMenuItem>
      </SubMenu>
    </Menu>
  );
}
