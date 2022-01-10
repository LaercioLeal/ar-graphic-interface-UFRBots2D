import { motion } from "framer-motion";
import themes from "Provider/themes";
import styled from "styled-components";

import studentIcon from "assets/icon/student.png";

export const Image = styled(motion.img).attrs(() => ({
  src: studentIcon,
}))`
  height: 64px;
  margin-bottom: 20px;

  ${themes.medias.lessThan("hd")`
    height: 60px;
  `}
`;
