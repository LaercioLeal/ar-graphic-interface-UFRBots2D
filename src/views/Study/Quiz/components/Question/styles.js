import styled from "styled-components";
import { darken, rem } from "polished";
import themes from "Provider/themes";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  @keyframes showQuestion {
    from {
      width: 0;
      background-color: ${darken(0.04, themes.colors.white)};
    }
    to {
      width: 100%;
      background-color: ${darken(0.1, themes.colors.primary)};
    }
  }
  animation-name: showQuestion;
  animation-duration: 0.5s;

  display: flex;
  width: 100%;
  padding: 0;
  border-radius: 0 999px 999px 0;
  background-color: ${darken(0.1, themes.colors.primary)};
  overflow: hidden;

  > div {
    padding: 30px;
    margin: 10px 50px 10px 10px;
    width: 100%;
    border-radius: 12px;
    background-color: ${themes.colors.primary};
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 10px;
  }

  h1 {
    line-height: 22px;
    font-size: ${rem(18)};
    font-family: ${themes.fonts.bold};

    color: ${themes.colors.white};
  }

  :before {
    content: "";
    width: 50px;
    height: 110px;
    border-radius: 0 999px 999px 0;
    background-color: ${darken(0.04, themes.colors.white)};
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
  }
`;

export const Legend = styled.p`
  transition: all 0.5s;
  line-height: 22px;
  font-size: ${rem(16)};
  font-family: ${themes.fonts.bold};

  color: ${themes.colors.blue};

  margin: 70px 0 20px 0;

  text-align: center;
`;

export const Options = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  margin: 0 0 100px;
`;
