import styled from "styled-components";
import { rem, transparentize } from "polished";
import themes from "Provider/themes";
import { motion } from "framer-motion";
import { NavLink } from "components";

import { Container as ItemContainer } from "./components/Item/styles";

export const Container = styled.div``;

export const Title = styled(motion.h1)`
  transition: all 0.5s;
  line-height: 24px;
  font-size: ${rem(24)};
  font-family: ${themes.fonts.bold};

  color: ${themes.colors.gray};
  color: ${transparentize(0.3, themes.colors.blue)};
  cursor: context-menu;

  ${themes.medias.lessThan("hd")`
    font-size: ${rem(20)};
  `}

  span {
    transition: all 0.5s;
    text-align: center;
    font-size: ${rem(50)};
    color: ${transparentize(0.1, themes.colors.blue)};
  }

  :hover {
    color: ${themes.colors.primary};
    span {
      color: ${themes.colors.primary};
    }
  }
`;

export const WrapperItems = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

export const Item = styled(motion.div)`
  ${ItemContainer}
`;

export const Link = styled(NavLink)``;
