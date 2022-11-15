import { lighten, rem } from "polished";
import themes from "Provider/themes";
import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 0;
  padding-top: 20px;

  border-radius: 12px;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgb(204, 219, 232) -3px -3px 6px 1px inset;

  background-color: ${themes.colors.lightBlue};
  overflow: hidden;

  h1 {
    text-align: center;
    font-size: ${rem(20)};
    font-family: ${themes.fonts.semiBold};
    color: ${themes.colors.white};

    background-color: ${themes.colors.purple};
    border-radius: 3px 12px 12px 3px;
    width: fit-content;
    margin: 0 auto 0 0;
    padding: 10px 50px;
  }
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-top: 20px;
  padding: 0 0 20px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;

  transition: all 0.5s;
  width: 100%;
  padding: 0 20px;
  border-right: 2px solid ${themes.colors.purple};

  :last-child {
    border: none;
  }

  :hover {
    transform: scale(1.2);
  }

  span {
    font-size: ${rem(30)};
    text-align: center;
    font-family: ${themes.fonts.bold};
    margin-bottom: 10px;
    color: ${themes.colors.blue};
  }

  p {
    text-align: center;
    font-family: ${themes.fonts.semiBold};
    color: ${lighten(0.2, themes.colors.gray)};
  }
`;
