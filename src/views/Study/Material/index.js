import React from "react";

import { Container, Heading } from "components";

import * as S from "./styles";
import studentIcon from "assets/icon/student.png";

function Material() {
  return (
    <Container>
      <Heading page="material" title="Material" icon={studentIcon} />
    </Container>
  );
}

export default Material;
