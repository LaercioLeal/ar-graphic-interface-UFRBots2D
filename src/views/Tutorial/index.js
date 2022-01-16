import React from "react";

import { Container, HeadingPage } from "components";

import tutorialIcon from "assets/icon/tutorial.png";

function Tutorial() {
  return (
    <Container>
      <HeadingPage page="tutorial" title="Tutorial" icon={tutorialIcon} />
    </Container>
  );
}

export default Tutorial;
