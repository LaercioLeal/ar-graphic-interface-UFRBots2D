import styled from "styled-components";
import themes from "Provider/themes";
import { motion } from "framer-motion";
import { transparentize } from "polished";

export const Container = styled(motion.div)`
  position: relative;

  overflow: hidden;
  padding: 20px 30px;
  background-color: ${themes.colors.light200};
  background-color: ${transparentize(0.8, themes.colors.lightGray)};
`;

export const Content = styled.div`
  padding: 28px 40px 66px;
`;
