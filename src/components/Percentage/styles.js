import styled, { css, keyframes } from "styled-components";
import { transparentize } from "polished";
import themes from "Provider/themes";
import { motion } from "framer-motion";

export const Legend = styled(motion.div)`
  display: flex;
  flex-direction: column;
  transition: width 1s ease-in-out;
  width: ${({ width }) => `${width}%`};
  height: 100%;
`;

export const Percentage = styled.p`
  line-height: 24px;
  font-family: ${themes.fonts.bold};
  margin-top: auto;

  color: ${transparentize(0.5, themes.colors.gray)};

  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}
`;

export const Progress = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 100px;
  height: 10px;
  overflow: hidden;
`;

const slideIn = keyframes`
  0% {
    width: 0;
    background-color: ${transparentize(0.5, themes.colors.success)};
  }
  100% {
    width: ${({ width }) => `${width}%`};
  }
`;
const slideOut = keyframes`
  0% {
    width: 100%;
    background-color: ${transparentize(0.9, themes.colors.primary)};
  }
  100% {
    width: ${({ width }) => `${width}%`};
    background-color: ${themes.colors.primary};
  }
`;

export const Bar = styled.div`
  transition: width 1s ease-in-out;

  background-color: ${themes.colors.success};
  animation-name: ${slideIn};
  animation-duration: 1.5s;
  width: ${({ width }) => `${width}%`};
`;

export const BarOff = styled.div`
  transition: width 1s ease-in-out;

  background-color: ${themes.colors.primary};
  animation-name: ${slideOut};
  animation-duration: 1.5s;
  width: ${({ width }) => `${100 - width}%`};
`;
