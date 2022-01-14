import React, { useMemo } from "react";
import { Button } from "components";

import * as S from "../TeammateOne/styles";

export default function TeammateTwo({ handleSelect, isTeam, teams }) {
  const team = useMemo(() => {
    return teams["second"];
  }, [teams]);

  return (
    <div>
      {!isTeam && (
        <Button onClick={() => handleSelect("second")} variant="secondary">
          Selecione o Time 2
        </Button>
      )}
      {isTeam && (
        <>
          <Button onClick={() => handleSelect("second")} color="red">
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
