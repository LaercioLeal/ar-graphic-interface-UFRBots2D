import { NavLink } from "components";
import { darken } from "polished";
import themes from "Provider/themes";
import styled from "styled-components";

export const Content = styled.div``;

export const Movies = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 50px;
  column-gap: 20px;
  margin: 20px 0;
`;

export const Articles = styled.section`
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 50px;
  column-gap: 20px;
`;

export const Link = styled(NavLink)``;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 50px;
  margin-bottom: 20px;
`;

export const Card = styled.div`
  transition: all 0.3s;
  display: flex;
  padding: 20px;
  border-radius: 12px;
  background: ${themes.colors.blue};
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  color: white;

  align-items: center;
  justify-content: center;

  :hover {
    background: ${darken(0.2, themes.colors.blue)};
  }

  cursor: pointer;

  svg {
    fill: white;
    margin-right: 20px;
  }
`;
