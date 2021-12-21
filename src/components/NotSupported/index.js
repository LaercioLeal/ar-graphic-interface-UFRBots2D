import React from "react";

import * as S from "./styles";

export default function NotSupported() {
  return (
    <S.Container>
      <S.Card>
        <h1>Dispositivo não suportado</h1>
        <S.Logo />
        <h2>Tente novamente acessando configurações de desktop</h2>
      </S.Card>
    </S.Container>
  );
}
