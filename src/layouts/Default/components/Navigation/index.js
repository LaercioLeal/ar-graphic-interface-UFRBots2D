import React from "react";
import { LinearProgress } from "components";

import items from "./items";
import * as S from "./styles";

function Navigation() {
  return (
    <S.Container>
      {items.map((item) => (
        <S.Link key={item.path} to={item.path}>
          <span>{item.label}</span>
        </S.Link>
      ))}
      {false && <LinearProgress position="absolute" style={{ bottom: -4 }} />}
    </S.Container>
  );
}

export default Navigation;
