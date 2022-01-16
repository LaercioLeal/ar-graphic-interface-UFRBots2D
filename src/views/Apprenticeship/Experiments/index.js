import React, { useEffect } from "react";

import { Container, HeadingPage } from "components";

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
      <HeadingPage
        page="experiments"
        title="Apprenticeship"
        icon={experimentsIcon}
      />
    </Container>
  );
}

export default Apprenticeship;
