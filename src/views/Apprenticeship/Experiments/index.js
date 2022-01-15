import React, { useEffect } from "react";

import { Container, Heading } from "components";

import experimentsIcon from "assets/icon/experiments.png";
import { getExperiments } from "services";

function Apprenticeship() {
  useEffect(() => {
    getExperiments()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(error));
  });

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
