import { motion } from "framer-motion";
import themes from "Provider/themes";
import styled from "styled-components";

import goalIcon from "assets/icon/goal.png";
import { rem } from "polished";

export const Image = styled(motion.img).attrs(() => ({
  src: goalIcon,
}))`
  height: 64px;
  margin-bottom: 20px;

  ${themes.medias.lessThan("hd")`
    height: 60px;
  `}
`;

export const Title = styled(motion.h1)`
  line-height: 24px;
  font-size: ${rem(24)};
  font-family: ${themes.fonts.bold};

  color: ${themes.colors.gray};

  ${themes.medias.lessThan("hd")`
    font-size: ${rem(20)};
  `}

  span {
    margin-bottom: 20px;
    line-height: 50px;
    text-decoration-line: underline;
    text-decoration-style: double;
  }
`;
