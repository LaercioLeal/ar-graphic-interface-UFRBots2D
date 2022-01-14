import React from "react";

import { Container, Heading } from "components";

import experimentsIcon from "assets/icon/experiments.png";

function Apprenticeship() {
  return (
    <Container>
      <Heading
        page="experiments"
        title="Apprenticeship"
        icon={experimentsIcon}
      />
    </Container>
  );
}

export default Apprenticeship;
