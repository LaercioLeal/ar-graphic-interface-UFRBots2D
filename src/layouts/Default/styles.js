import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
  grid-template-areas:
    "header"
    "aside"
    "main";

  overflow: hidden;
`;

export const Main = styled.main`
  grid-area: main;
  position: relative;
`;
