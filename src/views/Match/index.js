import React from "react";

import { Container, Heading } from "components";

import * as S from "./styles";
import goalIcon from "assets/icon/goal.png";

function Match() {
  return (
    <Container>
      <Heading page="match" title="Partida" icon={goalIcon} />
      <S.Content>
        <S.Button>time 1</S.Button>
        <S.Button>time 2</S.Button>
      </S.Content>
    </Container>
  );
}

export default Match;
