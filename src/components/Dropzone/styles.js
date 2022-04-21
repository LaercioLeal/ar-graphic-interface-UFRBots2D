import styled from "styled-components";
import { motion } from "framer-motion";
import themes from "Provider/themes";
import { transparentize } from "polished";

export const Container = styled(motion.div)`
  display: flex;
  transition: width 1s ease-in-out;

  align-items: center;
  justify-content: center;

  padding: 50px;
  width: 100%;
  height: 100px;

  cursor: pointer;
  border: 2px dashed ${transparentize(0.1, themes.colors.primary)};
  border-radius: 12px;
  background-color: ${transparentize(0.9, themes.colors.blue)};

  svg {
    fill: ${themes.colors.darkblue};
    margin: 0 0 0 10px;
  }
`;
