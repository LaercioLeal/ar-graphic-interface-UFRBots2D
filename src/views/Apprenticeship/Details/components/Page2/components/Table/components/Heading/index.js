import React, { useState } from "react";

import { Button } from "components";

import * as S from "./styles";
import Form from "../Form";

function Heading({ handleAdd, hasData }) {
  const [showAdd, setShowAdd] = useState(false);

  return (
    <S.Container>
      <S.Top>
        <S.Title>{hasData && "Lista de Ensaios"}</S.Title>

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
