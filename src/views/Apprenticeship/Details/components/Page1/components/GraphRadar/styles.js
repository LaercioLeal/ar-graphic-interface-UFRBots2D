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
  width: 50%;
  height: 500px;
  overflow: hidden;

  margin: 5px 0;

  text {
    line-height: 22px !important;
    font-size: ${rem(14)} !important;
    font-family: ${themes.fonts.medium} !important;
  }

  * {
    font-family: ${themes.fonts.medium} !important;
  }
`;
