import React, { useMemo } from "react";

import * as S from "./styles";

const variants = {
  hidden: { y: -20, x: 20, opacity: 0 },
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  closed: {
    y: -20,
    x: 20,
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

export default function Results({ results }) {
  const whoWon = useMemo(() => {
    if (!results) return "";
    return results.empate
      ? "Empate"
      : results.team1.winner
      ? `${results.team1.name} venceu a partida!`
      : `${results.team2.name} venceu a partida!`;
  }, [results]);

  return (
    <S.Container
      absolute={!results}
      initial="hidden"
      animate={results ? "visible" : "closed"}
      variants={variants}
    >
      {results && (
        <>
          <S.Title>Resumo da partida anterior:</S.Title>
          <S.Placar>
            <S.Title empate={results.empate}>
              <p className="resume">{whoWon}</p>
            </S.Title>
            <S.Title>
              <span className="team-name">{results.team1.name}</span>
              <S.Value
                empate={results.empate}
                winner={
                  !results.empate && results.team1.score > results.team2.score
                }
              >
                {results.team1.score}
              </S.Value>{" "}
              x{" "}
              <S.Value
                empate={results.empate}
                winner={
                  !results.empate && results.team2.score > results.team1.score
                }
              >
                {results.team2.score}
              </S.Value>
              <span className="team-name">{results.team2.name}</span>
            </S.Title>
          </S.Placar>
        </>
      )}
    </S.Container>
  );
}
