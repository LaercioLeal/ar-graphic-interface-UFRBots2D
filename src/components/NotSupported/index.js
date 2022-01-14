import React from "react";

import * as S from "./styles";

export default function NotSupported() {
  return (
    <S.Container>
      <S.Card>
        <h1>Dispositivo não suportado</h1>
        <S.Logo />
        <h2>
          Acesse através de um
          <br />
          desktop com SO Linux
        </h2>
      </S.Card>
    </S.Container>
  );
}
