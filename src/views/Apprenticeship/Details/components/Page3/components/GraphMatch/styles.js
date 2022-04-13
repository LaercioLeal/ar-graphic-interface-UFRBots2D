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
  width: 100%;
  height: 400px;
  overflow: hidden;

  ${themes.medias.lessThan("hd")`
    width: 90%;
  `}

  text {
    line-height: 22px;
    font-size: ${rem(16)};
    font-family: ${themes.fonts.bold};

    color: ${themes.colors.gray};
  }

  * {
    font-family: ${themes.fonts.medium} !important;
  }
`;

export const Total = styled.text`
  && {
    line-height: 22px;
    font-size: ${rem(32)};
    font-family: ${themes.fonts.medium} !important;

    fill: ${themes.colors.gray};

    &:before {
      content: "Total";
    }
  }
`;
