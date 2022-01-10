import React from "react";

import { Container, Heading } from "components";

import * as S from "./styles";
import aboutIcon from "assets/icon/about.png";

function About() {
  return (
    <Container>
      <Heading page="about" title="About" icon={aboutIcon} />
    </Container>
  );
}

export default About;
