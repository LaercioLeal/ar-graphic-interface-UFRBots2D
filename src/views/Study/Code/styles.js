import styled, { css } from "styled-components";
import { lighten, rem, size } from "polished";
import themes from "Provider/themes";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  column-gap: 80px;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;

  margin-left: 10%;
`;

export const Description = styled.p`
  line-height: 24px;
  font-size: ${rem(16)};
  font-family: ${themes.fonts.bold};

  color: ${themes.colors.white};
  margin: 20px 0;

  span,
  p {
    color: ${lighten(0.1, themes.colors.gray)};
    text-align: justify;
  }
`;

export const Image = styled(motion.img)`
  ${({ content }) => !content && size(64)}
  ${({ content }) =>
    content &&
    css`
      display: flex;
      margin: 20px auto 0 100px;
    `}
`;

export const Section = styled.section`
  display: flex;
  padding: 20px 0;
  column-gap: 3%;
`;

export const PopupVoice = styled.div`
  background: ${themes.colors.primary};
  padding: 0 20px;
  position: relative;
  border-radius: 10px;
  max-width: 60%;

  h3 {
    color: ${themes.colors.white};
    font-family: ${themes.fonts.bold};
  }

  ::after {
    content: "";
    position: absolute;
    transform: rotate(90deg);
    border: 15px solid transparent;
    border-top-color: ${themes.colors.primary};
    right: 100%;

    top: 25%;
    bottom: 50%;
  }
`;
