import styled from "styled-components";

import emptyIcon from "assets/icon/files_missing.png";
import themes from "Provider/themes";
import { rem, transparentize } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 10px 0 20px;

  h1,
  h3 {
    line-height: 24px;
    font-size: ${rem(18)};
    font-family: ${themes.fonts.bold};

    color: ${transparentize(0.5, themes.colors.gray)};
  }

  h3 {
    margin-top: 10px;
    font-size: ${rem(16)};
    color: ${transparentize(0.5, themes.colors.blue)};
  }
`;

export const Image = styled.img.attrs(() => ({
  src: emptyIcon,
}))`
  height: 64px;
  margin-bottom: 20px;

  ${themes.medias.lessThan("hd")`
    height: 60px;
  `}
`;
