import React, { useCallback, useEffect, useMemo, useState } from "react";
import { addQuizResponses } from "services";
import * as Icons from "@material-ui/icons";
import { questions as items } from "./questions";

import * as S from "./styles";
import { Button, Loading } from "components";

const NUM_OF_QUESTIONS = 3;

export default function Responding({ setResponding }) {
  const [isLoading, setLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);

  const canFinish = useMemo(() => {
    return !questions.find((item) => !item.answered);
  }, [questions]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const sort = () => {
    let ids = [];
    for (let index = 0; index < NUM_OF_QUESTIONS; index++) {
      ids.push(index + 1);
    }
    return ids;
  };

  const getQuestions = useCallback(() => {
    const drawn = sort();
    const selectees = items.filter((item) => drawn.includes(item.id));
    setQuestions(
      selectees.map((item) => {
        return { ...item, answered: false, selected: null };
      })
    );
  }, []);

  const finish = useCallback(() => {
    setLoading(true);
    setTimeout(async () => {
      await add().then((_) => {
        setResponding(false);
        setLoading(false);
      });
    }, 1000);
  }, [setResponding]);

  const add = async () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    await addQuizResponses({
      correctQuestions: "",
      incorrectQuestions: "",
      totalScore: "",
      createdAt: `${day < 10 ? "0" + day : day}/${
        month < 10 ? "0" + month : month
      }/${year}`,
    });
  };

  useEffect(() => {
    getQuestions();
  }, [getQuestions]);

  if (isLoading) return <Loading />;

  return (
    <S.Container>
      <S.Middle>
        {!!questions && questions.length > 0 && (
          <div>
            <div>{questions[currentQuestion].title}</div>
            {questions[currentQuestion].options.map((option) => {
              return <div>{option}</div>;
            })}
          </div>
        )}
      </S.Middle>
      <S.Bottom>
        <Button
          color="blue"
          isDisabled={currentQuestion === 0}
          onClick={() => {
            scrollToTop();
            setCurrentQuestion(currentQuestion - 1);
          }}
        >
          <Icons.ArrowBack /> Anterior
        </Button>
        {canFinish && (
          <Button color="success" isDisabled={!canFinish} onClick={finish}>
            <Icons.Check /> Finalizar
          </Button>
        )}
        <Button
          color="blue"
          isDisabled={currentQuestion === NUM_OF_QUESTIONS - 1}
          onClick={() => {
            scrollToTop();
            setCurrentQuestion(currentQuestion + 1);
          }}
        >
          Próxima
          <Icons.ArrowForward />
        </Button>
      </S.Bottom>
    </S.Container>
  );
}
