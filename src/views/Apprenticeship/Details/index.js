import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { useSnackbar } from "notistack";

import SwipeableViews from "react-swipeable-views";
import { useQuery } from "utils";

import { Container, HeadingPage, Loading } from "components";
import { AppBar, Box, Tab, Tabs, useTheme } from "@material-ui/core";
import * as S from "./styles";

import experimentsIcon from "assets/icon/experiments.png";
import { a11yProps, Page1, Page2, Page3, TabPanel } from "./components";
import { useHistory } from "react-router-dom";
import routes from "constants/routes";

import { addTraining, deleteTraining } from "services";

import { getTrainingData } from "services/api/training";
import { useQueue } from "modules/queue";

export default function Details() {
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();
  const [value, setValue] = React.useState(1);
  const history = useHistory();
  const [experiment, setExperiment] = useState();
  const query = useQuery();

  const { setQueue, queue } = useQueue();

  const [trainingData, setTrainingData] = useState([]);
  const [selectedToDetails, setSelectedToDetails] = useState();
  const [isLoading, setLoading] = useState(true);

  const havingData = useMemo(() => {
    return trainingData.length > 0;
  }, [trainingData]);

  const handleChange = (event, index) => {
    setValue(index);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const fetchData = useCallback(async () => {
    const { createdAt, title, id } = query;
    setExperiment({ createdAt, title, id });

    const data = await getTrainingData(id);
    if (data.isError) {
      enqueueSnackbar(data.message, { variant: "error" });
      history.replace(routes.apprenticeship.details);
    }
    setTrainingData(data.data);
    let hasStatusDone =
      data.data.filter((item) => item.status === "done").length === 0;
    if (isLoading) {
      setTimeout(() => {
        setLoading(false);
        setValue(hasStatusDone ? 1 : 0);
      }, 1000);
    }
  }, [
    enqueueSnackbar,
    setTrainingData,
    setExperiment,
    history,
    query,
    isLoading,
  ]);

  const handleAdd = useCallback(
    (values) => {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      addTraining({
        ...values,
        idExperiment: experiment.id,
        createdAt: `${day < 10 ? "0" + day : day}/${
          month < 10 ? "0" + month : month
        }/${year}`,
      })
        .then((response) => {
          const { isError, message } = response;
          if (!isError) enqueueSnackbar(message, { variant: "success" });
          else enqueueSnackbar(message, { variant: "error" });
          fetchData();
        })
        .catch(() => {
          enqueueSnackbar("Ocorreu um erro, tente novamente", {
            variant: "error",
          });
        });
    },
    [enqueueSnackbar, fetchData, experiment]
  );

  const handleRemove = useCallback(
    async (id) => {
      if (id) {
        await deleteTraining({ id })
          .then((response) => {
            const { isError, message } = response;
            if (!isError) {
              setTrainingData(trainingData.filter((item) => item.id !== id));
              enqueueSnackbar(message, { variant: "success" });
            } else enqueueSnackbar(message, { variant: "error" });
            fetchData();
          })
          .catch(() => {
            enqueueSnackbar("Ocorreu um erro, tente novamente", {
              variant: "error",
            });
          });
      }
    },
    [enqueueSnackbar, setTrainingData, trainingData, fetchData]
  );

  useLayoutEffect(() => {
    fetchData();
  }, []); // eslint-disable-line

  useEffect(() => {
    if (!!experiment) {
      history.replace(
        routes.apprenticeship.details +
          `?createdAt=${experiment.createdAt}&id=${experiment.id}&title=${
            experiment.title
          }&openM=${value === 1 ? "true" : "false"}`
      );
    }
  }, [value]); // eslint-disable-line

  useEffect(() => {
    if (!queue.running && !!queue.queue.length) {
      queue.updateLast().then((_) => {
        fetchData();
        queue.run().then((_) => {
          fetchData();
          enqueueSnackbar("Ensaio finalizado", { variant: "success" });
        });
      });
    }
  }, [queue.queue.length, queue.running]); // eslint-disable-line

  const SelectedToExecute = (training) => {
    if (training.status === "wait") {
      queue.add(training).then((_) => {
        setQueue(queue);
        fetchData();
      });
      enqueueSnackbar("Ensaio preparado para execução", { variant: "info" });
    } else {
      setValue(2);
    }
  };

  const runAll = async () => {
    for (const training of trainingData) {
      await queue.add(training);
    }
    setQueue(queue);
    enqueueSnackbar("Ensaios preparados para execução", { variant: "info" });
    fetchData();
  };

  return (
    <Container>
      <HeadingPage
        page="experiments"
        title={`${experiment?.title}<p>Criado em ${experiment?.createdAt}</p>`}
        icon={experimentsIcon}
        back
      />
      <S.Content>
        <Box>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab
                active={value === 0}
                disabled={
                  !havingData ||
                  trainingData.filter((item) => item.status === "done")
                    .length === 0
                }
                label="Dados Gerais do Experimento"
                {...a11yProps(0)}
              />
              <Tab active={value === 1} label="Ensaios" {...a11yProps(1)} />
              {!!selectedToDetails && (
                <Tab
                  active={value === 2}
                  disabled={!havingData}
                  label="Detalhes do Ensaio"
                  {...a11yProps(2)}
                />
              )}
            </Tabs>
          </AppBar>
          {isLoading && <Loading />}
          {!isLoading && (
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <Page1 experiment={experiment} />
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                <Page2
                  runAll={runAll}
                  data={trainingData}
                  handleAdd={handleAdd}
                  handleRemove={handleRemove}
                  setSelectedToExecute={SelectedToExecute}
                  setSelectedToDetails={(training) => {
                    setSelectedToDetails(training);
                    setValue(2);
                  }}
                />
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                <Page3 training={selectedToDetails} />
              </TabPanel>
            </SwipeableViews>
          )}
        </Box>
      </S.Content>
    </Container>
  );
}
