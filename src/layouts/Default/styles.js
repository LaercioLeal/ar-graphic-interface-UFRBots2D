import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 89px 1fr;
  grid-template-areas:
    "header"
    "aside"
    "main";
`;

export const Main = styled.main`
  grid-area: main;
  position: relative;

  background-color: green;
`;
