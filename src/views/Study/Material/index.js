import React from "react";

import { Container } from "components";

import * as S from "./styles";

function Material() {
  return (
    <Container>
      <S.Image layoutId="icon-page-material" transition={{ duration: 1 }} />
      <div>Material</div>
    </Container>
  );
}

export default Material;
