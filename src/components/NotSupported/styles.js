import styled from "styled-components";
import themes from "Provider/theme";

import logo from "assets/img/logo.png";
import { rem } from "polished";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 20px;
  background-color: ${themes.colors.primary};

  align-items: center;
  justify-content: center;

  h1,
  h2 {
    line-height: 21px;
    font-size: ${rem(18)};
    font-family: ${themes.fonts.bold};
    text-align: center;

    color: ${themes.colors.gray};
  }

  h2 {
    font-size: ${rem(17)};
    color: ${themes.colors.lightGray};
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding: 20px;

  border-radius: 20px;
  background-color: ${themes.colors.white};
  box-shadow: 2px 2px 4px ${themes.colors.gray};
`;

export const Logo = styled.img.attrs(() => ({
  src: logo,
  alt: "Porto Cuida uma empresa Porto Seguro",
}))`
  width: 40%;
  margin: 20px;
`;
