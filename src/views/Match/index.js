import React, { useState, useMemo } from "react";
import { useSnackbar } from "notistack";

import Lottie from "react-lottie";
import animationData from "./soccer.json";

import { Container, HeadingPage } from "components";

import * as S from "./styles";
import goalIcon from "assets/icon/goal.png";
import { Results, Table, Teammate } from "./components";
import { getDirectory, startMatch } from "services";
import themes from "Provider/themes";
import { motion } from "framer-motion";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const variants = {
  hidden: {
    y: -20,
    x: 20,
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

function Match() {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState([]);

  // const handleSelect = useCallback(
  //   async (position) => {
  //     if (!teams[position]) {
  //       let { data, isError, message } = await getDirectory();
  //       if (!isError) {
  //         if (
  //           teams["first"]?.name === data.teamName ||
  //           teams["second"]?.name === data.teamName
  //         ) {
  //           enqueueSnackbar(
  //             "Você deve escolher um time diferente como adversário",
  //             { variant: "error" }
  //           );
  //         } else {
  //           setTeams({
  //             ...teams,
  //             [position]: {
  //               path: data.path,
  //               name: data.teamName,
  //             },
  //           });
  //         }
  //       } else {
  //         enqueueSnackbar(message, { variant: "error" });
  //       }
  //     } else {
  //       setTeams({
  //         ...teams,
  //         [position]: null,
  //       });
  //     }
  //   },
  //   [teams, enqueueSnackbar]
  // );

  const handleAdd = (values) => {
    const { mode, teams } = values;
    const { first, second } = teams;
    setData([
      ...data,
      {
        mode,
        status: "wait",
        team1: { ...first, result: "" },
        team2: { ...second, result: "" },
      },
    ]);
  };

  const handleStart = async () => {
    // setResults(null);
    // setRunning(true);
    // let { data, isError, message } = await startMatch(
    //   isChecked ? 1 : 2,
    //   teams["first"].path,
    //   teams["second"].path
    // );
    // enqueueSnackbar(message, { variant: "success" });
    // if (!isError) {
    //   let { scores } = data;
    //   setResults({
    //     team1: {
    //       score: scores.team1,
    //       name: teams["first"].name,
    //       winner: scores.team1 > scores.team2,
    //     },
    //     team2: {
    //       score: scores.team2,
    //       name: teams["second"].name,
    //       winner: scores.team2 > scores.team1,
    //     },
    //     empate: scores.team2 === scores.team1,
    //   });
    // }
    handleFinish();
    return true;
  };

  const handleFinish = () => {
    // setRunning(false);
  };

  const isRunning = useMemo(() => {
    return data.filter((item) => item.status === "running").length > 0;
  }, [data]);

  return (
    <Container>
      <HeadingPage page="match" title="Partida" icon={goalIcon} />
      {/* <Results results={results} /> */}
      <S.Content>
        <motion.div
          initial="hidden"
          animate={isRunning ? "visible" : "hidden"}
          variantes={variants}
        >
          <Lottie
            options={defaultOptions}
            width={isRunning ? 512 / 2 : 0}
            height={isRunning ? 390 / 2 : 0}
          />
        </motion.div>
        <Table data={data} runAll={() => {}} handleAdd={handleAdd} />
      </S.Content>
    </Container>
  );
}

export default Match;
