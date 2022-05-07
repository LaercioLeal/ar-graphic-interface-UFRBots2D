import React, { useCallback, useEffect, useMemo, useState } from "react";
import { addQuizResponses } from "services";
import * as Icons from "@material-ui/icons";
import { questions as items } from "./questions";

import * as S from "./styles";
import { Button, Loading } from "components";
import Question from "../Question";
import { useSnackbar } from "notistack";

const NUM_OF_QUESTIONS = 3;

export default function Responding({ setResponding, setLastResult }) {
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);

  const canFinish = useMemo(() => {
    return !questions.find((item) => item.selected === null);
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
      selectees
        .map((item) => {
          return { ...item, selected: null };
        })
        .sort(() => Math.random() - 0.5)
    );
  }, []);

  const add = useCallback(async () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const correctQuestions = questions.filter(
      (item) => item.selected === item.correct
    ).length;
    const incorrectQuestions = NUM_OF_QUESTIONS - correctQuestions;
    const totalScore = Math.trunc(100 / NUM_OF_QUESTIONS) * correctQuestions;

    return await addQuizResponses({
      correctQuestions,
      incorrectQuestions,
      totalScore,
      createdAt: `${day < 10 ? "0" + day : day}/${
        month < 10 ? "0" + month : month
      }/${year}`,
    }).then((_) => {
      return {
        correctQuestions,
        incorrectQuestions,
        totalScore,
        createdAt: `${day < 10 ? "0" + day : day}/${
          month < 10 ? "0" + month : month
        }/${year}`,
      };
    });
  }, [questions]);

  const finish = useCallback(() => {
    setLoading(true);
    setTimeout(async () => {
      await add().then((response) => {
        setLastResult(response);
        setLoading(false);
        setResponding(false);
      });
    }, 1000);
  }, [setResponding, setLastResult, add]);

  const onSelect = useCallback(
    (option) => {
      setQuestions(
        questions.map((question, index) => {
          if (index === currentQuestion) {
            return {
              ...question,
              selected: option,
            };
          }
          return question;
        })
      );
    },
    [currentQuestion, questions, setQuestions]
  );

  useEffect(() => {
    getQuestions();
    enqueueSnackbar("Selecione uma alternativa para cada questão!", {
      variant: "info",
    });
  }, [getQuestions, enqueueSnackbar]);

  if (isLoading) return <Loading />;

  return (
    <S.Container>
      <S.Middle>
        {!!questions && questions.length > 0 && (
          <Question
            key={currentQuestion}
            onSelect={onSelect}
            question={questions[currentQuestion]}
          />
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
        <Button color="red" onClick={() => setResponding(false)}>
          <Icons.ExitToApp /> Sair
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
