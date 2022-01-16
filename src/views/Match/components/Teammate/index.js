import React, { useMemo } from "react";
import { Button } from "components";

import * as S from "./styles";

export default function TeammateOne({ handleSelect, isTeam, teams, position }) {
  const team = useMemo(() => {
    return teams[position];
  }, [teams, position]);

  return (
    <div>
      {!isTeam && (
        <Button
          onClick={() => handleSelect(position)}
          variant={position === "first" ? "primary" : "secondary"}
        >
          Selecione o Time {position === "first" ? 1 : 2}
        </Button>
      )}
      {isTeam && (
        <>
          <S.Infos>
            <S.Title>
              <span>Nome:</span> {team.name}
            </S.Title>
            <S.Title>
              <span>Diretório:</span> {team.path}
            </S.Title>
          </S.Infos>
          <Button onClick={() => handleSelect(position)} color="red">
            Remover
          </Button>
        </>
      )}
    </div>
  );
}
