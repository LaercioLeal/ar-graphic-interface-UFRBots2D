import React, { useLayoutEffect, useState } from "react";
import { useSnackbar } from "notistack";

import { Container, HeadingPage } from "components";

import experimentsIcon from "assets/icon/experiments.png";
import { getExperiments, addExperiment } from "services";
import { NoExperiments, Table } from "./components";

function Apprenticeship() {
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setLoading] = useState(false);
  const [experiments, setExperiments] = useState([]);

  const handleAddExperiment = async (title) => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    if (title) {
      setLoading(true);
      await addExperiment({
        title,
        createdAt: `${day < 10 ? "0" + day : day}/${
          month < 10 ? "0" + month : month
        }/${year}`,
      })
        .then((response) => {
          const { isError, message } = response;
          if (!isError) enqueueSnackbar(message, { variant: "success" });
          else enqueueSnackbar(message, { variant: "error" });
          handleGetExperiments();
        })
        .catch(() => {
          enqueueSnackbar("Ocorreu um erro, tente novamente", {
            variant: "error",
          });
          setLoading(false);
        });
    }
  };

  const handleGetExperiments = () => {
    setLoading(true);
    getExperiments()
      .then((response) => {
        setExperiments(response.data);
        setLoading(false);
      })
      .catch((error) => setLoading(false));
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
      <NoExperiments
        data={experiments}
        isLoading={isLoading}
        handleAddExperiment={handleAddExperiment}
      />
      <Table
        data={experiments}
        isLoading={isLoading}
        handleAddExperiment={handleAddExperiment}
      />
    </Container>
  );
}

export default Apprenticeship;
