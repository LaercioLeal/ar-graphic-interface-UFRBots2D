import { motion } from "framer-motion";
import { rem, transparentize } from "polished";
import themes from "Provider/themes";
import styled, { css } from "styled-components";

export const Container = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 30px;
  border-radius: 10px;

  width: 100%;

  box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px,
    rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px,
    rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px,
    rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px,
    rgb(255, 85, 85) 40px -40px;

  margin-bottom: 50px;

  ${({ absolute }) =>
    absolute &&
    css`
      position: absolute;
    `}
`;

export const Placar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  line-height: 50px;
  font-size: ${rem(20)};
  font-family: ${themes.fonts.bold};

  color: ${transparentize(0.5, themes.colors.gray)};

  ${themes.medias.lessThan("hd")`
    font-size: ${rem(18)};
  `}

  .extra {
    /* color: ${themes.colors.darkblue}; */
  }

  .resume {
    color: ${({ empate }) =>
      empate ? themes.colors.primary : themes.colors.success};
  }

  .placar-title {
    display: none;
    color: ${themes.colors.yellow};
    margin-right: 50px;
  }
`;

export const Value = styled.span`
  line-height: 50px;
  font-size: ${rem(20)};
  font-family: ${themes.fonts.bold};

  color: ${transparentize(0.5, themes.colors.gray)};

  ${themes.medias.lessThan("hd")`
    font-size: ${rem(18)};
  `}

  color: ${({ winner, empate }) =>
    winner
      ? themes.colors.success
      : empate
      ? themes.colors.primary
      : themes.colors.red};
  margin: 0 20px;
`;
