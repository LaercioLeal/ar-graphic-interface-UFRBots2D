import styled from "styled-components";

import emptyIcon from "assets/icon/empty.png";
import themes from "Provider/themes";
import { rem, transparentize } from "polished";

export const Container = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 40px 20px 20px;

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
