import styled, { css } from "styled-components";
import themes from "Provider/themes";
import { rem, transparentize } from "polished";
import { motion } from "framer-motion";

export const Container = css`
  transition: box-shadow 0.3s, background-color 0.3s;

  padding: 20px;
  background-color: ${transparentize(0.9, themes.colors.primary)};

  box-shadow: 0px 2px 4px ${themes.colors.primary};
  border: 1px solid ${transparentize(0.9, themes.colors.primary)};
  border-left: none;

  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  :hover {
    box-shadow: 0px 0px 0px ${themes.colors.primary};
    background-color: ${transparentize(0.6, themes.colors.primary)};

    img {
      height: 60px;

      ${themes.medias.lessThan("hd")`
        height: 56px;
      `}
    }
  }
`;

export const Image = styled(motion.img)`
  transition: height 0.3s;
  height: 64px;
  margin-bottom: 20px;

  ${themes.medias.lessThan("hd")`
    height: 60px;
  `}
`;

export const Title = styled.h1`
  line-height: 21px;
  font-size: ${rem(18)};
  font-family: ${themes.fonts.bold};
  text-align: center;

  color: ${themes.colors.gray};

  min-height: 42px;

  ${themes.medias.lessThan("hd")`
    font-size: ${rem(16)};
  `}
`;
