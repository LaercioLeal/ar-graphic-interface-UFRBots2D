import React, { useMemo } from "react";
import { Button } from "components";

import * as S from "./styles";

export default function TeammateOne({ handleSelect, isTeam, teams }) {
  const team = useMemo(() => {
    return teams["first"];
  }, [teams]);

  return (
    <div>
      {!isTeam && (
        <Button onClick={() => handleSelect("first")}>
          Selecione o Time 1
        </Button>
      )}
      {isTeam && (
        <>
          <Button onClick={() => handleSelect("first")} color="red">
            Remover {team.name}
          </Button>
          <S.Infos>
            <S.Title>
              <span>Nome:</span> {team.name}
            </S.Title>
            <S.Title>
              <span>Diretório:</span> {team.path}
            </S.Title>
          </S.Infos>
        </>
      )}
    </div>
  );
}
