import { motion } from "framer-motion";
import { transparentize } from "polished";
import themes from "Provider/themes";
import styled from "styled-components";

export const Container = styled(motion.div)`
  overflow: hidden;
  border-radius: 8px;
  width: 100%;
  background-color: ${transparentize(0.8, themes.colors.lightGray)};
`;

export const Content = styled.div`
  display: flex;
  padding: 10px;
`;

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  button:first-child {
    margin-right: 10px;
  }
`;
