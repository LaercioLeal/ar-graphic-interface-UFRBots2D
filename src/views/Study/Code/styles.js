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
  li,
  p {
    color: ${lighten(0.1, themes.colors.gray)};
    text-align: justify;
  }

  ul {
    list-style-type: "*";
    li {
      list-style: none;
      position: relative;
      padding: 3px 0 2px 25px;

      :before {
        content: "";
        position: absolute;
        left: 0;
        top: 10px;
        height: 5px;
        width: 5px;
        border: 1px solid ${themes.colors.primary};
        border-width: 2px 2px 0 0;
        transform: rotate(45deg);
      }
    }
  }
`;

export const Image = styled(motion.img)`
  ${({ content }) => !content && size(64)}
  ${({ content }) =>
    content &&
    css`
      display: flex;
      margin: 20px auto;
      max-width: 100%;
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
