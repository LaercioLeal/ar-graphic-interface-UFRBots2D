import React, { useState, useCallback, useMemo } from "react";

import { Container, Heading, Button } from "components";

import * as S from "./styles";
import goalIcon from "assets/icon/goal.png";
import { TeammateOne, TeammateTwo } from "./components";

function Match() {
  const [teams, setTeams] = useState({ first: null, second: null });

  const atLeastOne = useMemo(() => {
    return teams["first"]?.name || teams["second"]?.name;
  }, [teams]);

  const isTeam1 = useMemo(() => {
    return teams["first"]?.name || false;
  }, [teams]);

  const isTeam2 = useMemo(() => {
    return teams["second"]?.name || false;
  }, [teams]);

  const handleSelect = useCallback(
    (position) => {
      if (!teams[position]) {
        setTeams({
          ...teams,
          [position]: {
            path: "../",
            name: `Time ${position.toUpperCase()}`,
          },
        });
      } else {
        setTeams({
          ...teams,
          [position]: null,
        });
      }
    },
    [teams]
  );

  const handleStart = () => {
    return true;
  };

  return (
    <Container>
      <Heading page="match" title="Partida" icon={goalIcon} />
      <S.Content>
        <S.Body>
          <S.Title>
            Simular uma partida é bem simples, selecione dois times e veja o
            desempenho de ambos <span>:D</span>
          </S.Title>
          <S.Wrapper>
            <S.Teammate divisor={atLeastOne}>
              <TeammateOne
                handleSelect={handleSelect}
                isTeam={isTeam1}
                teams={teams}
              />
            </S.Teammate>
            <S.Teammate>
              <TeammateTwo
                handleSelect={handleSelect}
                isTeam={isTeam2}
                teams={teams}
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
