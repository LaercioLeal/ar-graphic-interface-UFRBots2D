import styled from "styled-components";
import { rem, transparentize } from "polished";

import themes from "Provider/theme";
import { NavLink } from "components";

export const Container = styled.nav`
  position: fixed;
  transition: margin 0.5s, width 0.5s, border-radius 0.8s, box-shadow 1s;
  margin: 20px 0;
  margin-right: 10%;

  display: flex;
  width: 90%;
  max-height: 60px;
  align-items: center;
  justify-content: space-between;

  background-color: ${themes.colors.white};

  padding: 16px 7%;
  z-index: 13;

  box-shadow: 0px 2px 4px ${transparentize(0.5, themes.colors.primary)};
  border-radius: 0 20px 20px 0;

  ${({ top }) =>
    !!top &&
    `
    margin: 0;  
    margin-bottom: 20px;
    width: 100%;
    border-radius: 0px;
    box-shadow: 0px 2px 4px ${transparentize(0.5, themes.colors.gray)};
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
