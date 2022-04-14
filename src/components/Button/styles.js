import { darken, rem } from "polished";
import themes from "Provider/themes";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const textStyle = css`
  line-height: 21px;
  font-size: ${rem(14)};
  font-family: ${themes.fonts.medium};
  color: ${themes.colors.white};
`;

const commonStyles = css`
  ${textStyle}
  transition: background-color 0.3s, border-radius 0.3s;

  border: none;
  padding: 10px 20px 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  :hover {
    border-radius: 12px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  }
`;

const themeButton = {
  primary: () => {
    return css`
      background-color: ${themes.colors.primary};
      :hover {
        background-color: ${darken(0.1, themes.colors.primary)};
      }
    `;
  },
  secondary: () => {
    return css`
      background-color: ${themes.colors.blue};
      :hover {
        background-color: ${darken(0.1, themes.colors.blue)};
      }
    `;
  },
  outlined: () => {
    return css`
      box-shadow: none;
      :hover {
        background-color: ${darken(0.1, themes.colors.lightGray)};
      }
    `;
  },
};

const colors = {
  green: {
    background: themes.colors.green,
    text: themes.colors.white,
  },
  purple: {
    background: themes.colors.purple,
    text: themes.colors.white,
  },
  blue: {
    background: themes.colors.blue,
    text: themes.colors.white,
  },
  red: {
    background: themes.colors.red,
    text: themes.colors.white,
  },
  white: {
    background: themes.colors.white,
    text: themes.colors.gray,
  },
  success: {
    background: themes.colors.success,
    text: themes.colors.white,
  },
};

export const Container = styled(motion.button)`
  ${commonStyles}
  ${({ variant }) => themeButton[variant]}
  ${({ bold }) =>
    bold &&
    css`
      font-family: ${themes.fonts.bold};
    `}
  ${({ color }) =>
    color &&
    css`
      background-color: ${colors[color].background};
      color: ${colors[color].text};
      &:hover {
        background-color: ${darken(0.1, colors[color].background)};
      }
    `}
  ${({ isDisabled, isLoading }) =>
    (isDisabled || isLoading) &&
    css`
      cursor: ${isDisabled ? "not-allowed" : "wait"};
      pointer-events: unset;

      background-color: ${themes.colors.lightGray};
      &:hover {
        background-color: ${darken(0.1, themes.colors.lightGray)};
      }
    `}
`;
