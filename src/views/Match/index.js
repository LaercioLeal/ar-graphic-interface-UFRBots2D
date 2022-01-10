import React from "react";

import { Container } from "components";

import * as S from "./styles";

function Match() {
  return (
    <Container>
      <S.Image layoutId="icon-page-match" transition={{ duration: 1 }} />
      <div>Match</div>
    </Container>
  );
}

export default Match;
