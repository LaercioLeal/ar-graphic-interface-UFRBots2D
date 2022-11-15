import { css } from "styled-components";

const fonts = {
  title: '"Montserrat", sans-serif',
  text: '"Quicksand", sans-serif',
  bold: '"MangueiraBold", sans-serif',
  semiBold: '"MangueiraSemiBold", sans-serif',
  regular: '"MangueiraRegular", sans-serif',
  medium: '"MangueiraMedium", sans-serif',
};

export default fonts;

export const fontFaces = css`
  @font-face {
    font-family: "MangueiraRegular";
    src: url("https://res.cloudinary.com/portosegurocuida/raw/upload/v1613750806/portocuida-fonts/mangueiraalt-regular-webfont_suepiw.woff2")
        format("woff2"),
      url("https://res.cloudinary.com/portosegurocuida/raw/upload/v1613750806/portocuida-fonts/mangueiraalt-regular-webfont_tdunib.woff")
        format("woff"),
      url("https://res.cloudinary.com/portosegurocuida/raw/upload/v1613750806/portocuida-fonts/mangueiraalt-regular-webfont_zylj1s.ttf")
        format("truetype"),
      url("https://static.portocuida.com.br/1/mangueiraalt-regular-webfont.svg#MangueiraRegular")
        format("svg");
    font-display: swap;
  }

  @font-face {
    font-family: "MangueiraMedium";
    src: url("https://res.cloudinary.com/portosegurocuida/raw/upload/v1613750674/portocuida-fonts/mangueiraalt-medium-webfont_lhywnc.woff2")
        format("woff2"),
      url("https://res.cloudinary.com/portosegurocuida/raw/upload/v1613750674/portocuida-fonts/mangueiraalt-medium-webfont_x2qfix.woff")
        format("woff"),
      url("https://res.cloudinary.com/portosegurocuida/raw/upload/v1613750674/portocuida-fonts/mangueiraalt-medium-webfont_fhepy3.ttf")
        format("truetype"),
      url("https://static.portocuida.com.br/1/mangueiraalt-medium-webfont.svg#MangueiraMedium")
        format("svg");
    font-display: swap;
  }

  @font-face {
    font-family: "MangueiraSemiBold";
    src: url("https://res.cloudinary.com/portosegurocuida/raw/upload/v1613750674/portocuida-fonts/mangueiraalt-semibold-webfont_sc4hst.woff2")
        format("woff2"),
      url("https://res.cloudinary.com/portosegurocuida/raw/upload/v1613750674/portocuida-fonts/mangueiraalt-semibold-webfont_xxa5ri.woff")
        format("woff"),
      url("https://res.cloudinary.com/portosegurocuida/raw/upload/v1613750674/portocuida-fonts/mangueiraalt-semibold-webfont_cjh2ve.ttf")
        format("truetype"),
      url("https://static.portocuida.com.br/1/mangueiraalt-semibold-webfont.svg#MangueiraSemiBold")
        format("svg");
    font-display: swap;
  }

  @font-face {
    font-family: "MangueiraBold";
    src: url("https://res.cloudinary.com/portosegurocuida/raw/upload/v1613750674/portocuida-fonts/mangueiraalt-bold-webfont_wapi8h.woff2")
        format("woff2"),
      url("https://res.cloudinary.com/portosegurocuida/raw/upload/v1613750674/portocuida-fonts/mangueiraalt-bold-webfont_neqhfu.woff")
        format("woff"),
      url("https://res.cloudinary.com/portosegurocuida/raw/upload/v1613750673/portocuida-fonts/mangueiraalt-bold-webfont_g3adjo.ttf")
        format("truetype"),
      url("https://static.portocuida.com.br/1/mangueiraalt-bold-webfont.svg#MangueiraBold")
        format("svg");
    font-display: swap;
  }
`;
