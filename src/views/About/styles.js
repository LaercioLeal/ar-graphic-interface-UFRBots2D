import { motion } from "framer-motion";
import { rem, transparentize } from "polished";
import themes from "Provider/themes";
import styled from "styled-components";

export const Content = styled.div``;

export const Card = styled(motion.div)`
  border-radius: 20px;
  padding: 40px 40px 40px 0;
  margin-bottom: 50px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  display: flex;
  flex-direction: row;
  align-items: center;

  h2 {
    text-align: justify;
  }

  .higher {
    text-align: center;
    font-size: ${rem(50)};
    color: ${transparentize(0.5, themes.colors.blue)};
  }

  svg {
    margin-right: 450px;
    max-width: 400px;
    max-height: 400px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Body = styled.section`
  display: flex;
  flex-direction: row;
  padding: 20px 0;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.h2`
  line-height: 24px;
  font-size: ${rem(20)};
  font-family: ${themes.fonts.bold};

  color: ${transparentize(0.5, themes.colors.gray)};

  strong {
    color: ${transparentize(0.3, themes.colors.darkblue)};
  }

  .email {
    font-size: ${rem(18)};
    color: ${transparentize(0.5, themes.colors.blue)};
  }

  ${themes.medias.lessThan("hd")`
    font-size: ${rem(18)};
  `}
`;
