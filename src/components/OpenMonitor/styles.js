import styled from "styled-components";
import themes from "Provider/themes";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: -20px;
  padding: 10px 10px 5px 30px;
  border-radius: 0 20px 20px 0;

  transition: left 0.1s, box-shadow 0.2s;

  box-shadow: rgb(65, 99, 243, 0.5) 0px 0px 0px 1px,
    rgba(65, 99, 243, 0.4) -5px 5px, rgba(65, 99, 243, 0.3) -10px 10px,
    rgba(65, 99, 243, 0.2) -15px 15px, rgba(65, 99, 243, 0.1) -20px 20px,
    rgba(65, 99, 243, 0.05) -25px 25px;

  :hover {
    left: -5px;
    box-shadow: rgba(65, 99, 243, 0.3) 0px 0px 0px 1px,
      rgba(65, 99, 243, 0.2) -5px 5px, rgba(65, 99, 243, 0.1) -10px 10px,
      rgba(65, 99, 243, 0.05) -15px 15px;
  }
`;

export const Image = styled.img`
  height: 40px;

  ${themes.medias.lessThan("hd")`
    height: 30px;
  `}
`;
