import React, { useState } from "react";

import { Button } from "components";

import * as S from "./styles";
import Form from "../Form";

function Heading({ handleAdd, canRunAll, runAll, hasData }) {
  const [showAdd, setShowAdd] = useState(false);

  return (
    <S.Container>
      <S.Top>
        <S.Title>{hasData && "Lista de Ensaios"}</S.Title>

        {hasData && canRunAll && !!!showAdd && (
          <Button onClick={runAll} variant="secondary" color="success">
            Executar todos
          </Button>
        )}

        <Button
          variant="secondary"
          onClick={() => setShowAdd(!showAdd)}
          color={showAdd ? "red" : "blue"}
        >
          {showAdd ? "Cancelar" : "+ Adicionar"}
        </Button>
      </S.Top>
      <Form show={showAdd} handleAdd={handleAdd} />
    </S.Container>
  );
}

export default Heading;
