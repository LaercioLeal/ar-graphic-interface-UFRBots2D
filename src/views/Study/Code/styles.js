import styled from "styled-components";
import { rem, size, transparentize } from "polished";
import themes from "Provider/themes";
import { motion } from "framer-motion";

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
  justify-content: space-evenly;
  align-items: center;
  padding: 30px 10px 20px;

  > div {
    display: flex;
    flex-direction: row;

    /* justify-content: center; */
    align-items: center;

    max-width: 80%;
    column-gap: 15px;
  }
`;

export const Dot = styled.div`
  transition: all 0.5s;
  ${({ active }) => size(active ? 50 : 10)}
  border-radius: 10px;
  background-color: ${({ active }) =>
    active ? themes.colors.blue : transparentize(0.8, themes.colors.blue)};

  cursor: pointer;

  p {
    margin-top: 20px;
    font-size: ${rem(12)};
    font-family: ${themes.fonts.bold};
    color: ${themes.colors.primary};
    text-align: center;
  }
`;
