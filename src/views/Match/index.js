import React, { useState, useCallback, useMemo } from "react";
import { useSnackbar } from "notistack";

import { Container, HeadingPage, Button } from "components";

import * as S from "./styles";
import goalIcon from "assets/icon/goal.png";
import { Teammate } from "./components";
import { getDirectory } from "services";

function Match() {
  const { enqueueSnackbar } = useSnackbar();
  const [teams, setTeams] = useState({ first: null, second: null });
  const [isRunning, setRunning] = useState(false);

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
      : "Primeiro, escolha os seus times <span>:D</span>";
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

  const handleStart = () => {
    handleFinish();
    return true;
  };

  const handleFinish = () => {
    setRunning(false);
  };

  return (
    <Container>
      <HeadingPage page="match" title="Partida" icon={goalIcon} />
      <S.Content>
        <S.Body>
          <S.Title dangerouslySetInnerHTML={{ __html: pageInfo }} />
          <S.Wrapper>
            <S.Teammate divisor={atLeastOne}>
              <Teammate
                handleSelect={handleSelect}
                isTeam={isTeam1}
                teams={teams}
                position="first"
              />
            </S.Teammate>
            <S.Teammate>
              <Teammate
                handleSelect={handleSelect}
                isTeam={isTeam2}
                teams={teams}
                position="second"
              />
            </S.Teammate>
          </S.Wrapper>
        </S.Body>
        <S.Bottom>
          {isTeam1 && isTeam2 && (
            <Button onClick={handleStart} color="success" bold>
              INICIAR PARTIDA
            </Button>
          )}
        </S.Bottom>
      </S.Content>
    </Container>
  );
}

export default Match;
