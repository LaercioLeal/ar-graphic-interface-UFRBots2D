import styled from "styled-components";
import themes from "Provider/themes";
import { motion } from "framer-motion";
import { rem, transparentize } from "polished";

export const Container = styled(motion.div)`
  position: relative;

  overflow: hidden;
  padding: 20px 30px;
  background-color: ${themes.colors.light200};
  background-color: ${transparentize(0.8, themes.colors.lightGray)};

  h1 {
    text-align: center;
    line-height: 24px;
    font-size: ${rem(14)};
    font-family: ${themes.fonts.bold};

    color: ${transparentize(0.5, themes.colors.gray)};
    margin-bottom: 10px;
  }
`;

export const Content = styled.div`
  padding: 28px 40px 66px;
`;

export const Buttons = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 50%;
  margin: auto;

  button {
    min-width: 150px;
  }
`;

export const EditContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: auto;

  button {
    width: 150px;
    margin-left: 10px;
  }
`;
