import React from "react";

import { Container, Heading } from "components";

import * as S from "./styles";
import watchIcon from "assets/icon/watch.png";

function Watch() {
  return (
    <Container>
      <Heading page="watch" title="Watch" icon={watchIcon} />
    </Container>
  );
}

export default Watch;
