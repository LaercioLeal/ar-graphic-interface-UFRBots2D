import { motion } from "framer-motion";
import themes from "Provider/themes";
import { rem, transparentize } from "polished";
import styled from "styled-components";

import tutorialIcon from "assets/icon/tutorial.png";

export const Image = styled(motion.img).attrs(() => ({
  src: tutorialIcon,
}))`
  height: 64px;
  margin-bottom: 20px;

  ${themes.medias.lessThan("hd")`
    height: 60px;
  `}
`;

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
