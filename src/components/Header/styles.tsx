import styled, { keyframes } from "styled-components";

interface IMenuProps {
  isOpen: boolean;
}

export const Menu = styled.header`
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  padding: 24px 16px;
  max-width: var(--layout-size);
  position: sticky;
  top: 0;
`;

export const MenuContent = styled.div<IMenuProps>`
  display: flex;
  align-items: center;
  padding: 16px;
  transition: all 0.3s ease-in-out 0s;
  border: 1px solid rgb(255, 255, 255);
  border-radius: ${props => (!props.isOpen ? "4px" : "4px 4px 0px")};
  z-index: 5;
  background-color: rgb(255, 255, 255);
  ${props =>
    props.isOpen &&
    ` 
   
    border: 1px solid rgb(230, 230, 230);
    box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px;

    `}

  &:hover {
    border: 1px solid rgb(230, 230, 230);
    box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px;
  }
`;

export const HomeLink = styled.div`
  border-right: 2px solid rgb(230, 230, 230);
  margin-right: 16px;
  padding-right: 16px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 24px;
    left: -3px;
    width: 95%;
    height: 2px;
    background: rgb(24, 64, 88);
    transform: scaleX(0);
  }

  &:hover:after {
    transform: scaleX(1);
    transition: transform 0.3s linear;
  }
`;

export const Button = styled.button`
  width: 40px;
  height: 35px;
  border: 1px solid rgb(255, 255, 255);
  background: rgb(255, 255, 255);
  appearance: none;
  border-radius: 4px;
  padding: 0.3em;
  transition: border-color 0.4s linear 0s;

  &:hover {
    border-color: rgb(230, 230, 230);
  }

  &:focus {
    outline: none;
  }
`;

export const HamburgerIcon = styled.span<IMenuProps>`
  width: 100%;
  height: 100%;
  padding: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &:after,
  :before {
    content: "";
    display: block;
    background-color: rgb(46, 46, 46);
    height: 1px;
    transition: transform 0.3s ease-in-out 0s;
    width: 100%;
  }

  ${props =>
    props.isOpen &&
    `

  &:before {
    transform: rotate(45deg) translateY(8px) translateX(7px);
  }

  &:after {
    transform: rotate(-45deg) translateY(-8px) translateX(8px);
  }
  `}
  span {
    opacity: ${props => (props.isOpen ? 0 : 1)};
    display: block;
    width: 90%;
    height: 1px;
    background: black;
  }
`;

export const SubMenu = styled.ul<IMenuProps>`
  border: 1px solid rgb(230, 230, 230);
  border-radius: 0px 0px 4px 4px;
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px;
  list-style: none;
  margin: 0px;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  padding: 0px;
  position: absolute;
  top: 92px;
  right: 16px;
  transition: opacity 0.3s ease-in-out 0s, transform 0.3s ease-in-out 0s;
  transform: ${props => (props.isOpen ? "translateY(0)" : "translateY(-50px)")};

  width: 200px;
  pointer-events: ${props => (props.isOpen ? "all" : "none")};
  z-index: ${props => (props.isOpen ? 3 : -1)};

  ${props => props.isOpen && `transform-origin: 100% 0%;`}
`;

export const SubMenuItem = styled.li`
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(230, 230, 230);
  margin: 0px;
  transition: background-color 0.3s ease-in-out 0s;

  &:hover {
    background-color: rgb(230, 230, 230);
  }

  a {
    color: rgb(46, 46, 46);
    display: block;
    padding: 16px;
    text-decoration: none;
  }
`;
