import React, { useMemo } from "react";
import { getCategoria, notes } from "../Table/styles";

import * as S from "./styles";
import { Note } from "../Table/styles";

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

export default function LastResult({ data }) {
  const color = useMemo(() => {
    return notes[getCategoria(data.totalScore)];
  }, [data]);

  const message = useMemo(() => {
    let category = getCategoria(data.totalScore);
    return category === 100
      ? "Excelente desempenho, continue assim :D Parabéns"
      : category === 75
      ? "Ótimo resultado :D Parabéns!"
      : category === 50
      ? "Resultado legal em, mas podemos melhorar um pouco!"
      : category === 25
      ? "Um passo de cada vez, continue evoluindo"
      : "Não desanime, você consegue, vamos lá ;)";
  }, [data]);

  return (
    <S.Container
      absolute={!data}
      initial="hidden"
      animate={data ? "visible" : "closed"}
      variants={variants}
      color={color}
    >
      {data && (
        <>
          <S.Title>Resumo da sua última avaliação</S.Title>
          <S.Content>
            <S.Title>
              <p className="message">{message}</p>
            </S.Title>
            <Note note={data.totalScore}>
              <p>{data.totalScore}</p>
            </Note>
            <S.Title>
              <p className="resume">{data.correctQuestions} Acertos</p>
              <p className="resume">{data.incorrectQuestions} Erros</p>
            </S.Title>
          </S.Content>
        </>
      )}
    </S.Container>
  );
}
