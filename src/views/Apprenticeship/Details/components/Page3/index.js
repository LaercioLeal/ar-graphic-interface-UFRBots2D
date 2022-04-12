import React, { useEffect, useState } from "react";

import * as S from "./styles";
import { Header } from "./components";
import { getResultsResume } from "services";

export default function Page3({ training }) {
  const [resume, setResume] = useState();

  useEffect(() => {
    getResultsResume(training).then((response) => {
      setResume(response.data[0]);
    });
  }, [training]);

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
      {!!resume && (
        <div>
          <p>{`Vitorias: ${resume.victories}`}</p>
          <p>{`Derrotas: ${resume.defeats}`}</p>
          <p>{`Empates: ${resume.draws}`}</p>
        </div>
      )}
    </S.Container>
  );
}
