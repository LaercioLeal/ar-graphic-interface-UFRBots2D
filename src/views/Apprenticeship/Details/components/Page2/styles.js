import { rem, transparentize } from "polished";
import themes from "Provider/themes";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Title = styled.h2`
  line-height: 24px;
  font-size: ${rem(20)};
  font-family: ${themes.fonts.bold};

  color: ${transparentize(0.5, themes.colors.gray)};

  ${themes.medias.lessThan("hd")`
    font-size: ${rem(18)};
  `}

  p {
    color: ${transparentize(0.5, themes.colors.gray)};
    font-size: ${rem(16)};
    .info {
      color: ${themes.colors.lightGray};
      font-size: ${rem(14)};
      font-style: italic;
    }
  }

  span {
    font-style: italic;
    color: ${themes.colors.lightGray};
  }
`;
