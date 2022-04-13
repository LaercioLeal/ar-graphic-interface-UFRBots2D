import React from "react";

import * as S from "./styles";
import { Header } from "./components";

export default function Page3({ training }) {
  return (
    <S.Container>
      <Header training={training} />
      {/* 
        - GRÁFICO DE SOMAS
        - GRÁFICO COM AS PARTIDAS INDIVIDUAIS
        - RESUMO (
          - NÚMERO DE VITÓRIAS
          - NÚMERO DE DERROTAS
          - NÚMERO DE EMPATES
        )
      */}
    </S.Container>
  );
}
