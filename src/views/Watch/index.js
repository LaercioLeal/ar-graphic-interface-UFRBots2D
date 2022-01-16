import React from "react";

import { Container, HeadingPage } from "components";

import watchIcon from "assets/icon/watch.png";

function Watch() {
  return (
    <Container>
      <HeadingPage page="watch" title="Watch" icon={watchIcon} />
    </Container>
  );
}

export default Watch;
