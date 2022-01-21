import React, { useEffect, useState } from "react";

import SwipeableViews from "react-swipeable-views";
import { useQuery } from "utils";

import { Container, HeadingPage } from "components";
import { AppBar, Box, Tab, Tabs, useTheme } from "@material-ui/core";
import * as S from "./styles";

import experimentsIcon from "assets/icon/experiments.png";
import { a11yProps, Page1, Page2, Page3, TabPanel } from "./components";
import { useHistory } from "react-router-dom";
import routes from "constants/routes";

export default function Details() {
  const theme = useTheme();
  const [value, setValue] = React.useState(1);
  const history = useHistory();
  const [experiment, setExperiment] = useState();
  const query = useQuery();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  useEffect(() => {
    async function fetchData() {
      const { createdAt, title, id } = query;
      setExperiment({ createdAt, title, id });
    }

    fetchData();
  }, []); // eslint-disable-line

  useEffect(() => {
    if (!!experiment) {
      history.replace(
        routes.apprenticeship.details +
          `?createdAt=${experiment.createdAt}&id=${experiment.id}&title=${
            experiment.title
          }&openM=${value === 2 ? "true" : "false"}`
      );
    }
  }, [value]); // eslint-disable-line

  if (!experiment) return null;

  return (
    <Container>
      <HeadingPage
        page="experiments"
        title={`${experiment?.title}<p>Criado em ${experiment?.createdAt}</p>`}
        icon={experimentsIcon}
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
                label="Dados Gerados"
                {...a11yProps(0)}
              />
              <Tab active={value === 1} label="Ensaios" {...a11yProps(1)} />
              <Tab
                active={value === 2}
                label="Executar Ensaios"
                {...a11yProps(2)}
              />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Page1 experiment_id={experiment.id} />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <Page2 />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <Page3 />
            </TabPanel>
          </SwipeableViews>
        </Box>
      </S.Content>
    </Container>
  );
}
