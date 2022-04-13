import { transparentize } from "polished";
import themes from "Provider/themes";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 2.5px 0 20px;

  button {
    display: flex;
    align-items: center;
    max-height: 50px;
    svg {
      margin: 0 0 0 10px;
    }
  }
`;

export const Resume = styled.div`
  display: flex;
  border-radius: 12px;
  padding: 10px;

  width: 70%;
  justify-content: space-around;

  ${themes.medias.lessThan("hd")`
    width: 60%;
    `}

  background-color: ${transparentize(0.9, themes.colors.primaryDark)};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

  p {
    color: ${themes.colors.blue};
    :first-child {
      color: ${themes.colors.danger};
    }
  }

  ${({ resume }) =>
    resume &&
    css`
      background-color: ${transparentize(0.95, themes.colors.blue)};
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
        rgba(0, 0, 0, 0.24) 0px 1px 2px;
      p {
        color: ${themes.colors.danger};
        :first-child {
          color: ${themes.colors.success};
        }
        :last-child {
          color: ${themes.colors.blue};
        }
      }
    `}
`;
