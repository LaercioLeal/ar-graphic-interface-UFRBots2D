import React from "react";

import * as S from "./styles";

export default function Empty() {
  return (
    <S.Container>
      <S.Image />
      <h1>Não foram encontrados registros :/</h1>
      <h1>Execute partidas para obtê-los</h1>
      <h3>
        Caso deseja importar algum log, é só colocar uma cópia na pasta "log"
      </h3>
      <h3>em seu diretório principal e ele aparecerá aqui :D</h3>
    </S.Container>
  );
}
