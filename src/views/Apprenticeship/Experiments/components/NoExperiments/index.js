import React, { useState } from "react";

import { Button } from "components";
import Add from "../Add";

import * as S from "./styles";

export default function NoExperiments({
  handleAddExperiment,
  isLoading,
  data,
}) {
  const [showAdd, setShowAdd] = useState(false);

  if (data.length > 0) return null;
  return (
    <S.Container>
      <S.Image />
      <h1>Você ainda não possui experimentos cadastrados :(</h1>
      <h3>Adicione um experimento por aqui </h3>
      {!showAdd && (
        <Button variant="secondary" onClick={() => setShowAdd(!showAdd)}>
          + Adicionar experimento
        </Button>
      )}
      <Add
        add={handleAddExperiment}
        isLoading={isLoading}
        cancel={() => setShowAdd(!showAdd)}
        show={showAdd}
      />
    </S.Container>
  );
}
