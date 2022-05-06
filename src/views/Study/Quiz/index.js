import React, { useEffect, useState } from "react";
import { Container, HeadingPage, Loading } from "components";
import * as Icons from "@material-ui/icons";
import * as S from "./styles";

import quizIcon from "assets/icon/quiz.png";
import { getQuizResponses } from "services";
import { Responding, Table } from "./components";

function Quiz() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isResponding, setResponding] = useState(false);

  useEffect(() => {
    if (!isResponding)
      getQuizResponses().then((responses) => {
        setTimeout(() => {
          setLoading(false);
          setData(responses || []);
        }, 1000);
      });
  }, [isResponding]);

  return (
    <Container>
      <HeadingPage page="quiz" title="Quiz" icon={quizIcon} />
      {isLoading && data.length === 0 && <Loading />}
      {!isLoading && !isResponding && (
        <S.Container>
          <S.Title>
            {data.length > 0
              ? "Continue se aplicando e testando seus conhecimento :D"
              : "Faça sua primeira tentativa ;D"}
          </S.Title>
          <S.CustomButton onClick={() => setResponding(!isResponding)}>
            <S.Title>Responder Quiz</S.Title>
            <Icons.PlayArrow />
          </S.CustomButton>
          {data.length > 0 && <Table data={data} />}
        </S.Container>
      )}
      {isResponding && <Responding setResponding={setResponding} />}
    </Container>
  );
}

export default Quiz;
