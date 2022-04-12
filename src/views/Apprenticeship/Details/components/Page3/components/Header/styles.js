import { transparentize } from "polished";
import themes from "Provider/themes";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 20px;

  button {
    display: flex;
    align-items: center;
    max-height: 50px;
    svg {
      margin: 0 0 0 10px;
    }
  }
`;

export const Parameters = styled.div`
  display: flex;
  border-radius: 12px;
  padding: 10px;

  width: 50%;
  justify-content: space-evenly;

  background-color: ${transparentize(0.35, themes.colors.blue)};
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;

  p {
    color: ${themes.colors.white};
    :first-child {
      color: ${themes.colors.white};
    }
  }
`;
