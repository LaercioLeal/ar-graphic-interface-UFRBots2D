import React, { useLayoutEffect, useState } from "react";
import { useSnackbar } from "notistack";

import { Container, HeadingPage } from "components";
import * as S from "./styles";

import experimentsIcon from "assets/icon/experiments.png";
import { getExperiments, addExperiment } from "services";
import { NoExperiments, Table } from "./components";

function Apprenticeship() {
  const { enqueueSnackbar } = useSnackbar();
  const [experiments, setExperiments] = useState([]);

  const handleAddExperiment = ({ title }) => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    if (title)
      addExperiment({
        title,
        createdAt: `${day}/${month}/${year}`,
      })
        .then((response) => {
          const { isError, message } = response;
          if (!isError) enqueueSnackbar(message, { variant: "success" });
          else enqueueSnackbar(message, { variant: "error" });
        })
        .catch(() => {
          enqueueSnackbar("Ocorreu um erro, tente novamente", {
            variant: "error",
          });
        });
  };

  const handleGetExperiments = () => {
    getExperiments()
      .then((response) => {
        setExperiments(response.data);
      })
      .catch((error) => console.error(error));
  };

  useLayoutEffect(() => {
    handleGetExperiments();
  }, []);

  return (
    <Container>
      <HeadingPage
        page="experiments"
        title="Experimentos"
        icon={experimentsIcon}
      />
      <S.Content>
        <NoExperiments
          data={experiments}
          handleAddExperiment={handleAddExperiment}
        />
        <Table data={experiments} handleAddExperiment={handleAddExperiment} />
        {experiments.map((experiment) => {
          return (
            <div key={experiment.id}>
              <p>{experiment.title}</p>
              <p>{experiment.createdAt}</p>
            </div>
          );
        })}
      </S.Content>
    </Container>
  );
}

export default Apprenticeship;
