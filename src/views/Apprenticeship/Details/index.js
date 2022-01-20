import { Container, HeadingPage } from "components";
import React, { useEffect, useState } from "react";
import { useQuery } from "utils";
import experimentsIcon from "assets/icon/experiments.png";

export default function Details() {
  const [experiment, setExperiment] = useState();
  const query = useQuery();

  useEffect(() => {
    async function fetchData() {
      const data = query;
      setExperiment(data);
    }

    fetchData();
  }, []); // eslint-disable-line

  return (
    <Container>
      <HeadingPage
        page="experiments"
        title={`${experiment?.title}<p>Criado em ${experiment?.createdAt}</p>`}
        icon={experimentsIcon}
      />
      <h3>{experiment?.title}</h3>
      <p>{experiment?.createdAt}</p>
    </Container>
  );
}
