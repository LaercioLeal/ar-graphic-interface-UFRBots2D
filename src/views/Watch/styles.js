import { motion } from "framer-motion";
import themes from "Provider/themes";
import styled from "styled-components";

import watchIcon from "assets/icon/watch.png";

export const Image = styled(motion.img).attrs(() => ({
  src: watchIcon,
}))`
  height: 64px;
  margin-bottom: 20px;

  ${themes.medias.lessThan("hd")`
    height: 60px;
  `}
`;
