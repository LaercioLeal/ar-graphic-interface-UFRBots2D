import React, { useState, useCallback, useMemo } from "react";
import { useSnackbar } from "notistack";
import Switch from "react-switch";

import Lottie from "react-lottie";
import animationData from "./soccer.json";

import { Container, HeadingPage, Button } from "components";

import * as S from "./styles";
import goalIcon from "assets/icon/goal.png";
import { Results, Teammate } from "./components";
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
  const [teams, setTeams] = useState({ first: null, second: null });
  const [results, setResults] = useState(null);
  const [isRunning, setRunning] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const atLeastOne = useMemo(() => {
    return teams["first"]?.name || teams["second"]?.name;
  }, [teams]);

  const isTeam1 = useMemo(() => {
    return teams["first"]?.name || false;
  }, [teams]);

  const isTeam2 = useMemo(() => {
    return teams["second"]?.name || false;
  }, [teams]);

  const pageInfo = useMemo(() => {
    return isRunning
      ? "Aguarde o fim da partida .."
      : isTeam1 && isTeam2
      ? "Agora você já pode iniciar a partida!"
      : "Primeiro, escolha os seus times <span>=D</span>";
  }, [isTeam1, isTeam2, isRunning]);

  const handleSelect = useCallback(
    async (position) => {
      if (!teams[position]) {
        let { data, isError, message } = await getDirectory();
        if (!isError) {
          if (
            teams["first"]?.name === data.teamName ||
            teams["second"]?.name === data.teamName
          ) {
            enqueueSnackbar(
              "Você deve escolher um time diferente como adversário",
              { variant: "error" }
            );
          } else {
            setTeams({
              ...teams,
              [position]: {
                path: data.path,
                name: data.teamName,
              },
            });
          }
        } else {
          enqueueSnackbar(message, { variant: "error" });
        }
      } else {
        setTeams({
          ...teams,
          [position]: null,
        });
      }
    },
    [teams, enqueueSnackbar]
  );

  const handleStart = async () => {
    setResults(null);
    setRunning(true);
    let { data, isError, message } = await startMatch(
      isChecked ? 1 : 2,
      teams["first"].path,
      teams["second"].path
    );
    enqueueSnackbar(message, { variant: "success" });
    if (!isError) {
      let { scores } = data;
      setResults({
        team1: {
          score: scores.team1,
          name: teams["first"].name,
          winner: scores.team1 > scores.team2,
        },
        team2: {
          score: scores.team2,
          name: teams["second"].name,
          winner: scores.team2 > scores.team1,
        },
        empate: scores.team2 === scores.team1,
      });
    }
    handleFinish();
    return true;
  };

  const handleFinish = () => {
    setRunning(false);
  };

  return (
    <Container>
      <HeadingPage page="match" title="Partida" icon={goalIcon} />
      <Results results={results} />
      <S.Content>
        <S.Body>
          <S.Title dangerouslySetInnerHTML={{ __html: pageInfo }} />
          <S.Wrapper>
            <S.Teammate divisor={atLeastOne && !isRunning}>
              <Teammate
                handleSelect={handleSelect}
                isRunning={isRunning}
                isTeam={isTeam1}
                teams={teams}
                position="first"
              />
            </S.Teammate>
            <motion.div
              initial="hidden"
              animate={isRunning ? "visible" : "hidden"}
              variants={variants}
            >
              <Lottie
                options={defaultOptions}
                width={isRunning ? 512 / 2 : 0}
                height={isRunning ? 390 / 2 : 0}
              />
            </motion.div>
            <S.Teammate>
              <Teammate
                handleSelect={handleSelect}
                isRunning={isRunning}
                isTeam={isTeam2}
                teams={teams}
                position="second"
              />
            </S.Teammate>
          </S.Wrapper>
        </S.Body>
        <S.Section>
          <S.Title>
            <p>
              Aqui você pode trocar a velocidade da partida
              <br />
              <p className="info">Modo Normal - por volta de 10 minutos </p>
              <p className="info">Modo Rápido - em média apenas 3 minutos </p>
            </p>
          </S.Title>

          <Switch
            onChange={() => setChecked(!isChecked)}
            checked={isChecked}
            uncheckedIcon={false}
            checkedIcon={false}
            onColor={themes.colors.blue}
            offColor={themes.colors.success}
            disabled={isRunning}
          />
          <S.Title>
            <p className="info">Modo {isChecked ? "Normal" : "Rápido"}</p>
          </S.Title>
          <Button
            onClick={handleStart}
            color="success"
            isDisabled={!isTeam1 || !isTeam2 || isRunning}
            bold
          >
            {isRunning ? "PARTIDA EM ANDAMENTO" : "INICIAR PARTIDA"}
          </Button>
        </S.Section>
      </S.Content>
    </Container>
  );
}

export default Match;
