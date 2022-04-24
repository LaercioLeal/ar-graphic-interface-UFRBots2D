import { SectionTitle } from "components";
import React, { useEffect, useState } from "react";
import { getExperimentAllDataInfo } from "services";
import {
  GraphBar,
  GraphGF,
  GraphGS,
  GraphRadar,
  GraphSG,
  Resume,
  Table,
} from "./components";
import {
  parserResumeBar,
  parserResumeGF,
  parserResumeGS,
  parserResumeSG,
  parserResumeCombination,
} from "./functions";

import * as S from "./styles";

export default function Page1({ experiment }) {
  const [data, setData] = useState();

  useEffect(() => {
    getExperimentAllDataInfo({ id: experiment.id }).then(({ data }) => {
      setData(data);
    });
  }, [experiment]);

  return (
    <S.Container>
      {!!data && (
        <>
          <Table data={data.trainings} experiment={experiment} />
          <Resume data={data.trainings} />
          <SectionTitle title="Gráficos de Comparativos das Combinações" />
          <S.Graphs>
            <GraphRadar dados={parserResumeCombination(data.trainings)} />
            <GraphBar dados={parserResumeBar(data.trainings)} />
          </S.Graphs>
          <SectionTitle title="Gráficos das Somas de Gols" />
          <S.Graphs>
            <GraphGF dados={parserResumeGF(data.trainings)} />
            <GraphGS dados={parserResumeGS(data.trainings)} />
            <GraphSG dados={parserResumeSG(data.trainings)} />
          </S.Graphs>
        </>
      )}
    </S.Container>
  );
}
