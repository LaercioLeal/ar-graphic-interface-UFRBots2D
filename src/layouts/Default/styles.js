import themes from "Provider/themes";
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

  ${themes.medias.lessThan("hd")`
    grid-template-rows: 100px 1fr;
  `}
`;

export const Main = styled.main`
  grid-area: main;
  position: relative;
`;
