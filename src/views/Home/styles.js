import styled from "styled-components";
import { rem } from "polished";
import themes from "Provider/themes";
import { motion } from "framer-motion";
import { NavLink } from "components";

import { Container as ItemContainer } from "./components/Item/styles";

export const Container = styled.div``;

export const Title = styled(motion.h1)`
  line-height: 24px;
  font-size: ${rem(24)};
  font-family: ${themes.fonts.bold};

  color: ${themes.colors.gray};
  cursor: none;

  ${themes.medias.lessThan("hd")`
    font-size: ${rem(20)};
  `}

  :hover {
    color: ${themes.colors.primary};
    span {
      color: ${themes.colors.primary};
    }
  }

  span {
    margin-bottom: 20px;
    line-height: 50px;
    font-size: ${rem(30)};
    text-decoration-line: underline;
    text-decoration-style: double;
  }
`;

export const WrapperItems = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  margin-top: 70px;

  ${themes.medias.lessThan("hd")`
    margin-top: 30px;
  `}
`;

export const Item = styled(motion.div)`
  ${ItemContainer}
`;

export const Link = styled(NavLink)``;
