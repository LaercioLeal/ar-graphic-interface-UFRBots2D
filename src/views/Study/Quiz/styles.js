import { darken, rem } from "polished";
import themes from "Provider/themes";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  transition: all 0.3s;
  line-height: 22px;
  font-family: ${themes.fonts.bold};
  text-align: center;

  color: ${themes.colors.darkblue};

  margin-top: -50px;
`;

export const CustomButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s;

  margin: 20px 0px;
  padding: 20px;
  width: 100%;
  height: 70px;

  border-radius: 10px;
  background-color: ${themes.colors.blue};
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  border: none;
  cursor: pointer;

  h1 {
    color: white;
    margin: 0;
  }

  svg {
    margin-left: 20px;
    fill: white;
  }

  :hover {
    border-radius: 16px;
    background-color: ${darken(0.1, themes.colors.blue)};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    h1 {
      color: white;
      font-size: ${rem(18)};
    }
  }
`;
