import styled, { css } from "styled-components";
import { size, transparentize } from "polished";
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
  background-color: ${transparentize(0.9, themes.colors.gray)};

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
  transition: all 0.3s;
  ${size(10)}
  background-color: ${transparentize(0.8, themes.colors.gray)};
  border-radius: 8px;

  display: flex;
  align-items: center;

  cursor: pointer;

  :hover {
    ${size(10)}
    background-color: ${transparentize(0.6, themes.colors.blue)};
    width: 20px;
  }

  ${({ active }) =>
    active &&
    css`
      width: 25px;
      background-color: ${themes.colors.blue};
      box-shadow: ${transparentize(0.3, themes.colors.blue)} 0px 3px 8px;

      :hover {
        background-color: ${transparentize(0.2, themes.colors.blue)};
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
