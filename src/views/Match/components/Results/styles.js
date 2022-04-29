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

  transition: all 0.3s;

  box-shadow: 0px 1px 2px 0px rgba(255, 156, 85, 9),
    1px 2px 4px 0px rgba(255, 156, 85, 9), 2px 4px 8px 0px rgba(255, 156, 85, 9),
    2px 4px 16px 0px rgba(255, 156, 85, 9);

  :hover {
    background-color: ${transparentize(0.9, "rgba(255, 85, 85, 1)")};

    box-shadow: 0px 1px 2px 0px rgba(255, 156, 85, 7),
      1px 2px 4px 0px rgba(255, 156, 85, 7),
      2px 4px 8px 0px rgba(255, 156, 85, 7),
      2px 4px 16px 0px rgba(255, 156, 85, 7);
  }
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

  .resume {
    color: ${({ empate }) =>
      empate ? themes.colors.primary : themes.colors.success};
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
