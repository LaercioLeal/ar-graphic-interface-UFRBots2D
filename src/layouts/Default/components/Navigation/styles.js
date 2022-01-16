import styled from "styled-components";
import { rem, transparentize } from "polished";

import themes from "Provider/themes";
import { NavLink } from "components";
import logo from "assets/img/logo.png";

export const Container = styled.nav`
  position: fixed;
  transition: margin 0.5s, width 0.5s, border-radius 1s, box-shadow 2s,
    padding 0.5s;
  margin: 20px 0;
  margin-right: 10%;

  display: flex;
  width: 90%;
  overflow: hidden;
  max-height: 60px;
  align-items: center;
  justify-content: space-between;

  background-color: ${themes.colors.white};

  padding: 16px 0 16px 7%;
  z-index: 13;

  box-shadow: 2px 3px 4px ${transparentize(0.5, themes.colors.primary)};
  border-radius: 0 20px 20px 0;

  ${({ top }) =>
    !!top &&
    `
    padding: 16px 7%;
    margin: 0;  
    margin-bottom: 20px;
    width: 100%;
    border-radius: 0px;
    box-shadow: rgba(255, 139, 40, 0.3) 0px 0px 0px 1px,
      rgba(255, 139, 40, 0.4) 0 5px, rgba(255, 139, 40, 0.3) 0 10px,
      rgba(255, 139, 40, 0.2) 0 15px, rgba(255, 139, 40, 0.1) 0 20px,
      rgba(255, 139, 40, 0.05) 0 25px;
  `}
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;

  transition: 0.3s background-color;
  padding: 8px 20px;
  border-radius: 16px;

  &:hover {
    background-color: ${transparentize(0.9, themes.colors.primary)};
  }

  &.active {
    background-color: ${themes.colors.primary};
    padding: 8px 40px;
    span {
      line-height: 24px;
      font-size: ${rem(16)};
      font-family: ${themes.fonts.bold};
      color: ${themes.colors.white};
    }
  }

  span {
    line-height: 24px;
    font-size: ${rem(14)};
    font-family: ${themes.fonts.medium};

    color: ${themes.colors.gray};
  }
`;

export const Logo = styled.img.attrs(() => ({
  src: logo,
  alt: "UFRBots",
}))`
  transition: height 0.5s, opacity 1s linear;
  height: ${({ show }) => (show ? 40 : 0)}px;
  opacity: ${({ show }) => (show ? 1 : 0)};
`;
