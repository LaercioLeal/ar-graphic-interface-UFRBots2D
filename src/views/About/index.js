import React from "react";

import { Container, HeadingPage } from "components";

import aboutIcon from "assets/icon/about.png";

function About() {
  return (
    <Container>
      <HeadingPage page="about" title="About" icon={aboutIcon} />
    </Container>
  );
}

export default About;
