import styled, { css } from "styled-components";
import { darken, lighten, rem, size, transparentize } from "polished";
import themes from "Provider/themes";

export const Container = styled.div`
  position: fixed;
  top: 35%;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10px 20px;

  max-width: 60px;
  max-height: 600px;

  padding: 20px;
  border-radius: 99px;
  background-color: ${lighten(0.6, themes.colors.gray)};

  box-shadow: rgb(204, 219, 232) 3px 3px 6px 3px inset;

  > div {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    margin: 50px 0;
    min-height: 200px;
    max-height: 300px;
    row-gap: 15px;

    ${themes.medias.lessThan("hd")`
      min-height: 120px;
      max-height: 150px;
    `}
  }

  button {
    border-radius: 999px;
    padding: 5px;

    :hover {
      border-radius: 999px;
    }
  }
`;

export const Dot = styled.div`
  transition: all 0.5s;
  ${size(10)}
  background-color: ${transparentize(0.8, themes.colors.gray)};
  border-radius: 99px;

  display: flex;
  align-items: center;

  cursor: pointer;
  p {
    visibility: collapse;
    z-index: 10;
    font-size: ${rem(18)};
    font-family: ${themes.fonts.bold};
    color: ${themes.colors.blue};
    text-align: center;
    margin: auto;
  }

  :hover {
    ${size(40)}
    background-color: ${transparentize(0.6, themes.colors.blue)};

    ${({ active }) =>
      !active &&
      css`
        p {
          visibility: visible;
          color: ${themes.colors.white};
        }

        ::after {
          content: "";
          position: absolute;

          box-shadow: ${lighten(0.1, themes.colors.blue)} 0px 3px 8px;
          background-color: ${darken(0.04, themes.colors.primary)};
          margin-left: -100px;
          height: 20px;
          width: 200px;
        }
      `}
  }

  ${({ active }) =>
    active &&
    css`
      ${size(40)}
      background-color: ${themes.colors.blue};
      box-shadow: ${transparentize(0.3, themes.colors.blue)} 0px 3px 30px;
      p {
        visibility: visible;
      }

      :hover {
        ${size(40)}
        background-color: ${transparentize(0.2, themes.colors.blue)};
      }

      ::after {
        content: "";
        position: absolute;

        box-shadow: ${lighten(0.1, themes.colors.blue)} 0px 3px 8px;
        background-color: ${darken(0.04, themes.colors.white)};
        margin-left: -100px;
        height: 20px;
        width: 200px;
      }
    `}

  ${({ less }) =>
    less &&
    css`
      ${size(5)}
      margin: ${size(5)};
    `}
      
  ${({ hidden }) =>
    hidden &&
    css`
      visibility: collapse;
    `}
`;
