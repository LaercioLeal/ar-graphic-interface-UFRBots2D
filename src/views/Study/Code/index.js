import React from "react";

import { Container, HeadingPage } from "components";

import studentIcon from "assets/icon/student.png";

function Code() {
  return (
    <Container>
      <HeadingPage page="code" title="Code" icon={studentIcon} />
    </Container>
  );
}

export default Code;
