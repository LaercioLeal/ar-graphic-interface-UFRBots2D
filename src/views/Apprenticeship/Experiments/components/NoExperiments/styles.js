import styled from "styled-components";

import emptyIcon from "assets/icon/empty.png";
import themes from "Provider/themes";
import { rem, transparentize } from "polished";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 20px;

  h1,
  h3 {
    line-height: 24px;
    font-size: ${rem(18)};
    font-family: ${themes.fonts.bold};

    color: ${transparentize(0.5, themes.colors.gray)};
  }

  h3 {
    margin-top: 20px;
    margin-bottom: 50px;
    font-size: ${rem(16)};
    color: ${transparentize(0.5, themes.colors.blue)};
  }
`;

export const Image = styled.img.attrs(() => ({
  src: emptyIcon,
}))`
  height: 80px;
  margin-bottom: 50px;

  ${themes.medias.lessThan("hd")`
    height: 60px;
  `}
`;
