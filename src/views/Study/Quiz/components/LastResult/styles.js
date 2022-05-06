import { motion } from "framer-motion";
import { rem, transparentize } from "polished";
import themes from "Provider/themes";
import styled, { css } from "styled-components";

export const Container = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px 30px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  width: 100%;

  transition: all 0.3s;

  box-shadow: 0px 1px 0px 1px ${({ color }) => color};

  :hover {
    background-color: ${({ color }) => transparentize(0.9, color)};
  }
  margin-bottom: 10px;
  margin-top: -10px;

  ${({ absolute }) =>
    absolute &&
    css`
      position: absolute;
    `}
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  line-height: 30px;
  font-size: ${rem(20)};
  font-family: ${themes.fonts.bold};

  color: ${transparentize(0.5, themes.colors.gray)};

  ${themes.medias.lessThan("hd")`
    font-size: ${rem(18)};
  `}

  .message {
    color: ${themes.colors.success};
  }

  .resume {
    color: ${themes.colors.primary};
  }
`;
