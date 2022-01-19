import React, { useLayoutEffect, useState } from "react";

import { Container, HeadingPage } from "components";
import * as S from "./styles";

import experimentsIcon from "assets/icon/experiments.png";
import { getExperiments, addExperiment } from "services";
import { NoExperiments, Table } from "./components";

function Apprenticeship() {
  const [experiments, setExperiments] = useState([]);

  const handleAddExperiment = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    addExperiment({
      title: "",
      createdAt: `${day}/${month}/${year}`,
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
        title="Apprenticeship"
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
