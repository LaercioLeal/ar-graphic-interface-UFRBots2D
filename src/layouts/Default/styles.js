import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 160px 1fr;
  grid-template-areas:
    "header"
    "main";

  overflow: hidden;
  background-color: tomato;
  margin: 0;
`;

export const Main = styled.main`
  grid-area: main;
  position: relative;

  background-color: green;
  padding-top: 80px;
`;
