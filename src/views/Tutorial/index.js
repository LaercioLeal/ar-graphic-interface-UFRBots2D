import React from "react";

import { Container, Heading } from "components";

import * as S from "./styles";
import tutorialIcon from "assets/icon/tutorial.png";

function Tutorial() {
  return (
    <Container>
      <Heading page="tutorial" title="Tutorial" icon={tutorialIcon} />
    </Container>
  );
}

export default Tutorial;
