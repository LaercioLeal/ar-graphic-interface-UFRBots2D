import styled, { keyframes } from "styled-components";

import { Form as FormComponent } from "components";
import { rem } from "polished";
import themes from "Provider/themes";
import { motion } from "framer-motion";

const fadeIdAnimation = keyframes`
  from {
    opacity: 0;    
  }
  to {
    opacity: 1;    
  }
`;

export const Container = styled(motion.div)`
  position: relative;

  overflow: hidden;
`;

export const Content = styled.div`
  animation: ${fadeIdAnimation} 0.5s;

  button {
    width: 100%;
    margin-top: 20px;
  }
`;

export const Title = styled.h2`
  line-height: 24px;
  font-size: ${rem(16)};
  font-family: ${themes.fonts.regular};

  color: ${themes.colors.gray};
`;

export const Form = styled(FormComponent)`
  margin-top: 10px;

  .MuiInputBase-sizeSmall {
    line-height: 21px;
    font-size: ${rem(14)};
  }
`;

export const Fieldset = styled.fieldset`
  border: none;

  & + & {
    margin-top: 44px;
  }
`;
