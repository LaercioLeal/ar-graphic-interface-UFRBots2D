import React, { useEffect, useMemo, useState } from "react";
import CountUp from "react-countup";

import { getDashboardResume } from "services";

import * as S from "./styles";

export default function Resume() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const withoutResume = useMemo(() => {
    if (!data) return false;
    const { training, episodes, experiments, quiz } = data;
    return training === 0 && episodes === 0 && experiments === 0 && quiz === 0;
  }, [data]);

  useEffect(() => {
    getDashboardResume()
      .then(({ data }) => {
        setLoading(false);
        setData(data);
      })
      .catch((_) => {
        setLoading(false);
        setData({ training: 0, episodes: 0, experiments: 0, quiz: 0 });
      });
  }, []);

  return (
    <S.Container>
      <h1>
        {isLoading
          ? "Buscando .."
          : withoutResume
          ? "Após começar a utilizar a plataforma, suas métricas vão aparecendo aqui ;)"
          : "Seu resumo até aqui"}
      </h1>
      {data && (
        <S.Items>
          {data.training > 0 && (
            <S.Item>
              <CountUp start={0} end={data.training} duration={3} />
              <p>Ensaios</p>
            </S.Item>
          )}
          {data.episodes > 0 && (
            <S.Item>
              <CountUp start={0} end={data.episodes} duration={3} />
              <p>Episódios</p>
            </S.Item>
          )}
          {data.experiments > 0 && (
            <S.Item>
              <CountUp start={0} end={data.experiments} duration={3} />
              <p>Experimentos</p>
            </S.Item>
          )}
          {data.quiz > 0 && (
            <S.Item>
              <CountUp start={0} end={data.quiz} duration={3} />
              <p>Média no Quiz</p>
            </S.Item>
          )}
        </S.Items>
      )}
    </S.Container>
  );
}
