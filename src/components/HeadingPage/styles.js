import { motion } from "framer-motion";
import themes from "Provider/themes";
import styled from "styled-components";

import { rem } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: flex-start;

  margin-bottom: 60px;
  ${themes.medias.lessThan("hd")`
    margin-bottom: 20px;
  `}
`;

export const Image = styled(motion.img)`
  height: ${({ size }) => (size ? size : 64)}px;
  margin-right: 2px;

  ${themes.medias.lessThan("hd")`
    height: ${({ size }) => (size ? size - 4 : 60)}px;
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

  p {
    text-decoration: none;
    color: ${themes.colors.blue};
    font-size: ${rem(18)};
    text-align: left;
  }
`;

export const Back = styled(motion.div)`
  @keyframes showUpBackButton {
    from {
      margin-left: -100px;
      opacity: 0;
    }
    to {
      margin-left: 0;
      opacity: 1;
    }
  }
  animation-name: showUpBackButton;
  animation-duration: 2s;
  margin: 0 25px 0 0;
`;
