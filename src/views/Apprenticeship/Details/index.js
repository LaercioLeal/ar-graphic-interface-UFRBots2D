import React, { useEffect, useState } from "react";

import SwipeableViews from "react-swipeable-views";
import { useQuery } from "utils";

import { Container, HeadingPage } from "components";
import {
  AppBar,
  Box,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@material-ui/core";
import * as S from "./styles";

import experimentsIcon from "assets/icon/experiments.png";
import { Page1, Page2, Page3 } from "./components";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import routes from "constants/routes";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Details() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const location = useLocation();
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const [experiment, setExperiment] = useState();
  const query = useQuery();

  useEffect(() => {
    async function fetchData() {
      const { createdAt, title, id } = query;
      setExperiment({ createdAt, title, id });
    }

    fetchData();
  }, []); // eslint-disable-line

  useEffect(() => {
    if (!!experiment && !location.pathname.includes(`pageExp=${value + 1}`)) {
      history.replace(
        routes.apprenticeship.details +
          `?createdAt=${experiment.createdAt}&id=${experiment.id}&title=${
            experiment.title
          }&pageExp=${value + 1}`
      );
    }
  }, [value, experiment, history]); // eslint-disable-line

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
              <Tab
                active={value === 1}
                label="Adicionar Ensaio"
                {...a11yProps(1)}
              />
              <Tab
                active={value === 2}
                label="Executar Ensaio"
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
              <Page1 />
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
