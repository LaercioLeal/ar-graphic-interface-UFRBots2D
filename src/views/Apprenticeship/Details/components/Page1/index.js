import React, { useEffect, useState } from "react";
import { getExperimentAllDataInfo } from "services";
import { GraphAvg, Table } from "./components";
import { parserResumeCombination } from "./functions";

import * as S from "./styles";

export default function Page1({ experiment }) {
  const [data, setData] = useState();

  useEffect(() => {
    getExperimentAllDataInfo({ id: experiment.id }).then(({ data }) => {
      setData(data);
      // console.log(data);
    });
  }, [experiment]);

  return (
    <S.Container>
      {!!data && (
        <>
          <Table data={data.trainings} />
          <S.Graphs>
            <GraphAvg dados={parserResumeCombination(data.trainings)} />
          </S.Graphs>
        </>
      )}
    </S.Container>
  );
}
