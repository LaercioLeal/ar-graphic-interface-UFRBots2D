import React, { useState, useCallback, useMemo } from "react";
import { useSnackbar } from "notistack";
import Switch from "react-switch";

import { Container, HeadingPage, Button } from "components";

import * as S from "./styles";
import goalIcon from "assets/icon/goal.png";
import { Teammate } from "./components";
import { getDirectory, startMatch } from "services";
import themes from "Provider/themes";

function Match() {
  const { enqueueSnackbar } = useSnackbar();
  const [teams, setTeams] = useState({ first: null, second: null });
  const [isRunning, setRunning] = useState(false);
  const [isChecked, setChecked] = useState(true);

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

  const handleStart = async () => {
    console.log(teams["first"].path, teams["second"].path);
    await startMatch(
      isChecked ? 1 : 2,
      teams["first"].path,
      teams["second"].path
    );
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
        <S.Section>
          <S.Title>
            <p>
              Aqui você pode trocar a velocidade da partida
              <br />
              <p className="info">Modo Normal - entre 5 e 10 minutos</p>
              <p className="info">Modo Rápido - em torno de 3 minutos</p>
            </p>
          </S.Title>

          <Switch
            onChange={() => setChecked(!isChecked)}
            checked={isChecked}
            uncheckedIcon={false}
            checkedIcon={false}
            onColor={themes.colors.blue}
            offColor={themes.colors.success}
          />
          <S.Title>
            <p className="info">Modo {isChecked ? "Normal" : "Rápido"}</p>
          </S.Title>
          <Button
            onClick={handleStart}
            color="success"
            isDisabled={!isTeam1 || !isTeam2}
            bold
          >
            INICIAR PARTIDA
          </Button>
        </S.Section>
        <S.Bottom></S.Bottom>
      </S.Content>
    </Container>
  );
}

export default Match;
