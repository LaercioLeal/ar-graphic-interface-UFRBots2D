import styled, { css } from "styled-components";
import { rem, size, transparentize } from "polished";
import themes from "Provider/themes";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  column-gap: 80px;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
`;

export const FullHeight = styled.div`
  display: flex;
  min-height: 100vh;
  max-height: 100vh;
`;

export const Description = styled.h3`
  line-height: 24px;
  font-size: ${rem(16)};
  font-family: ${themes.fonts.medium};

  color: ${themes.colors.gray};
  margin: 20px 0;
`;

export const Image = styled(motion.img)`
  ${size(64)}
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

export const Pagination = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10px 20px;

  max-width: 60px;
  max-height: 600px;
  /* align-self: center; */
  /* margin: 50px 0 auto; */
  padding: 20px;
  border-radius: 99px;
  background-color: ${transparentize(0.9, themes.colors.gray)};

  --pagination-color-background: ${transparentize(0.9, themes.colors.gray)};

  > div {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    margin: 50px 0;
    row-gap: 15px;
  }

  button {
    border-radius: 999px;
    padding: 5px;

    :hover {
      border-radius: 999px;
    }
  }
`;

export const Dot = styled.div`
  transition: all 0.3s;
  ${size(10)}
  background-color: ${transparentize(0.8, themes.colors.gray)};
  border-radius: 8px;

  display: flex;
  align-items: center;

  cursor: pointer;

  :hover {
    ${size(10)}
    background-color: ${transparentize(0.6, themes.colors.blue)};
    width: 20px;
  }

  ${({ active }) =>
    active &&
    css`
      width: 25px;
      background-color: ${themes.colors.blue};
      box-shadow: ${transparentize(0.3, themes.colors.blue)} 0px 3px 8px;

      :hover {
        background-color: ${transparentize(0.2, themes.colors.blue)};
      }
    `}

  ${({ less }) =>
    less &&
    css`
      ${size(5)}
      margin: ${size(5)};
    `}
      
  ${({ hidden }) =>
    hidden &&
    css`
      visibility: collapse;
    `}
`;
