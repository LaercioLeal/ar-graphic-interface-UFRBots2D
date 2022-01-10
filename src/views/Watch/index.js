import React from "react";

import { Container } from "components";

import * as S from "./styles";

function Watch() {
  return (
    <Container>
      <S.Image layoutId="icon-page-watch" transition={{ duration: 1 }} />
      <div>Watch</div>
    </Container>
  );
}

export default Watch;
