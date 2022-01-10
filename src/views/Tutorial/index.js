import React from "react";

import { Container } from "components";

import * as S from "./styles";

function Tutorial() {
  return (
    <Container>
      <S.Image layoutId="icon-page-tutorial" transition={{ duration: 1 }} />
      <div>Tutorial</div>
    </Container>
  );
}

export default Tutorial;
