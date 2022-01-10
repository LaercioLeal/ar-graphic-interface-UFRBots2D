import React from "react";

import { Container, Heading } from "components";

import * as S from "./styles";
import goalIcon from "assets/icon/goal.png";

function Match() {
  return (
    <Container>
      <Heading page="match" title="Partida" icon={goalIcon} />
    </Container>
  );
}

export default Match;
