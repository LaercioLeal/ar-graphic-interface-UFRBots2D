import React, { useEffect, useState } from "react";
import { getExperimentAllDataInfo } from "services";
import { GraphBar, GraphRadar, Resume, Table } from "./components";
import { parserResumeBar, parserResumeCombination } from "./functions";

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
          <S.Graphs>
            <GraphRadar dados={parserResumeCombination(data.trainings)} />
            <GraphBar dados={parserResumeBar(data.trainings)} />
          </S.Graphs>
        </>
      )}
    </S.Container>
  );
}
