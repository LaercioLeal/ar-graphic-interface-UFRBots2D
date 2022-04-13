import React, { useEffect, useState } from "react";

import * as S from "./styles";
import { GraphMatch, GraphSum, Header } from "./components";
import { getResults, getResultsResume } from "services";

export default function Page3({ training }) {
  const [results, setResults] = useState();
  const [resume, setResume] = useState();

  useEffect(() => {
    getResultsResume(training).then((response) => {
      setResume(response.data[0]);
    });
  }, [training]);

  useEffect(() => {
    getResults({ idTraining: training.id }).then(({ data }) =>
      setResults(data)
    );
  }, [training]);

  return (
    <S.Container>
      {!!resume && !!results && (
        <>
          <Header training={training} results={results} />
          <S.Graphs>
            <GraphMatch results={results} />
            <GraphSum resume={resume} />
          </S.Graphs>
        </>
      )}
    </S.Container>
  );
}
