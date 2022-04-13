import { rem } from "polished";
import themes from "Provider/themes";
import styled from "styled-components";

export const COLORS_TAG = {
  victories: themes.colors.success,
  defeats: themes.colors.danger,
  draws: themes.colors.blue,
};

export const Container = styled.div`
  align-items: center;
  width: 35%;
  height: 400px;
  overflow: hidden;

  ${themes.medias.lessThan("hd")`
    width: 37%;
  `}

  text {
    line-height: 22px !important;
    font-size: ${rem(14)} !important;
    font-family: ${themes.fonts.medium} !important;
  }

  * {
    font-family: ${themes.fonts.medium} !important;
  }
`;

export const Total = styled.text`
  && {
    line-height: 22px;
    font-size: ${rem(32)} !important;
    font-family: ${themes.fonts.bold} !important;

    fill: ${themes.colors.gray};
    text-decoration: dotted !important;

    &:before {
      content: "Total";
    }
  }
`;
