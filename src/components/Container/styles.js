import styled, { css } from "styled-components";
import themes from "Provider/themes";

import logo from "assets/img/logo.png";
import { rem } from "polished";

const styles = css`
  margin: 0 auto;
  max-width: 1600px;
  min-height: ${({ windowHeight }) => windowHeight - 100}px;
`;

export const Section = styled.section`
  ${styles}
`;

export const Div = styled.div`
  ${styles}
`;

export const FooterContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 120px;

  span {
    line-height: 21px;
    font-size: ${rem(16)};
    font-family: ${themes.fonts.bold};
    text-align: center;

    color: ${themes.colors.white};
  }
`;

export const Footer = styled.div`
  width: 90%;
  padding: 40px 110px 40px 40px;
  background-color: ${themes.colors.primaryDark};
  border-radius: 0 999px 0 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img.attrs(() => ({
  src: logo,
  alt: "UFRBots",
}))`
  height: 100px;
  margin: auto;
`;
