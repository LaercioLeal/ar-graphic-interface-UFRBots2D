import styled from "styled-components";
import { rem, transparentize } from "polished";
import themes from "Provider/themes";
import { motion } from "framer-motion";

export const Container = styled(motion.section)`
  border-top: 1px solid ${themes.colors.primary};
  border-bottom: 1px solid ${themes.colors.blue};
  border-radius: 100px;

  padding: 10px 20px;
`;

export const Title = styled.p`
  line-height: 24px;
  font-family: ${themes.fonts.bold};
  margin-top: auto;
  font-size: ${rem(16)};

  color: ${transparentize(0.5, themes.colors.gray)};
`;
