import React, { useEffect, useState } from "react";
import { getExperimentAllDataInfo } from "services";
import { Table } from "./components";

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
          <Table data={data.trainings} />
          <S.Graphs></S.Graphs>
        </>
      )}
    </S.Container>
  );
}
