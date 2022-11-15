import React from "react";

import { Container, HeadingPage } from "components";
import * as S from "./styles";

import tutorialIcon from "assets/icon/tutorial.png";

function Tutorial() {
  return (
    <Container>
      <HeadingPage page="tutorial" title="Tutorial" icon={tutorialIcon} />
      <div>
        <S.Title>Ainda não disponível!</S.Title>
      </div>
    </Container>
  );
}

export default Tutorial;
