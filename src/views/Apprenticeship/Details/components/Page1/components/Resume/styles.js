import { motion } from "framer-motion";
import { rem, transparentize } from "polished";
import themes from "Provider/themes";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    ${themes.colors.primary} 0px 1px 3px -1px;
  padding: 20px;
  margin: 0 10%;
  border-radius: 12px;

  div {
    :first-child {
      border-left: 0;
    }
    :last-child {
      border-right: 0;
    }
  }
`;

export const Shortcut = styled.div`
  border-left: 2px solid ${transparentize(0.7, themes.colors.info)};
  border-right: 2px solid ${transparentize(0.7, themes.colors.info)};
  border-radius: 999px;
  display: flex;
  flex-direction: column;
  width: 100%;

  align-items: center;

  p {
    :nth-child(1) {
      color: ${themes.colors.primaryDark};
      color: ${transparentize(0.1, themes.colors.primaryDark)};
      font-size: ${rem(18)};
      text-transform: uppercase;
    }
    :nth-child(2) {
      color: ${transparentize(0.5, themes.colors.gray)};
      font-size: ${rem(16)};
    }
  }
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  ${({ comb }) =>
    comb &&
    `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
  `}
`;
