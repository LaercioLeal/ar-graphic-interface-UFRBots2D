import styled, { css } from "styled-components";
import { darken, lighten, rem, transparentize } from "polished";

import themes from "Provider/themes";
import { NavLink } from "components";
import logo from "assets/img/logo.png";

const styles = {
  container: css`
    position: fixed;
    transition: all 0.5s;

    margin: 0;
    margin-bottom: 20px;

    display: flex;
    height: 60px;
    width: 100%;
    overflow: hidden;
    align-items: center;
    justify-content: space-evenly;

    background-color: ${themes.colors.white};

    padding: 16px 0;
    z-index: 13;
    border-radius: 0px;

    box-shadow: ${lighten(0.23, themes.colors.blue)} 0px 1px 1px,
      ${lighten(0.13, themes.colors.blue)} 0px 0px 1px 1px;

    ${({ top }) =>
      top &&
      css`
        padding: 16px 10%;
        height: 100px;
        margin-right: 10%;
        background-color: ${darken(0.08, themes.colors.white)};

        box-shadow: 2px 3px 4px ${transparentize(0.5, themes.colors.primary)};
        box-shadow: none;

        background: rgb(233, 121, 32);
        background: linear-gradient(
          180deg,
          rgba(233, 121, 32, 0.6923144257703081) 0%,
          rgba(255, 139, 40, 0.5242471988795518) 6%,
          rgba(246, 246, 246, 1) 80%
        );
      `}
  `,
  link: css`
    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.5s;
    padding: 8px 20px;
    border-radius: 16px;
    min-width: 174px;

    &:hover {
      background-color: ${transparentize(0.9, themes.colors.blue)};
    }

    &.active {
      background-color: ${themes.colors.blue};

      padding: 8px 40px;
      height: 40px;
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

    ${({ top }) =>
      top &&
      css`
        &:hover {
          background-color: ${transparentize(0.7, themes.colors.white)};
        }
        &.active {
          span {
            font-family: ${themes.fonts.bold};
            color: ${themes.colors.primary};
          }
          margin-bottom: -35px;
          height: 60px;
          background: transparent;
          background-color: ${darken(0.04, themes.colors.white)};
          border-bottom-left-radius: none;
          border-bottom-right-radius: none;

          box-shadow: -2px -2px 3px rgba(255, 255, 255, 0.5),
            10px 10px 15px rgba(70, 70, 70, 0.12);

          box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
            rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        }
      `}
  `,
  logo: css`
    transition: height 0.5s, width 0.5s, opacity 1s linear;
    height: 0;
    opacity: 0;

    ${({ top }) =>
      !top &&
      css`
        height: 40px;
        opacity: 1;
      `}
  `,
};

export const Container = styled.nav`
  ${styles.container}
`;

export const Link = styled(NavLink)`
  ${styles.link}
`;

export const Logo = styled.img.attrs(() => ({
  src: logo,
  alt: "UFRBots",
}))`
  ${styles.logo}
`;
