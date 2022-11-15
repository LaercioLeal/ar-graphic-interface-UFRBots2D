import React, { useState } from "react";

import { Button } from "components";
import Add from "../Add";

import * as S from "./styles";

export default function NoExperiments({
  data,
  handleAddExperiment,
  isLoading,
}) {
  const [showAdd, setShowAdd] = useState(false);

  return (
    <S.Container shadow={!data.length}>
      <S.Image />
      {data.length ? (
        <>
          <h1>Resultado não encontrado :(</h1>
          <h3>Tente buscar novamente ou cadastre um novo experimento</h3>
        </>
      ) : (
        <>
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
        </>
      )}
    </S.Container>
  );
}
