import React from "react";

import { Container } from "components";

import * as S from "./styles";

function About() {
  return (
    <Container>
      <S.Image layoutId="icon-page-about" transition={{ duration: 1 }} />
      <div>About</div>
    </Container>
  );
}

export default About;
