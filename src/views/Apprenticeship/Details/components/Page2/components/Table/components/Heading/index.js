import React, { useCallback, useState } from "react";

import InputAdornment from "@material-ui/core/InputAdornment";
import SearchOutlined from "@material-ui/icons/SearchOutlined";

import { Button } from "components";

import * as S from "./styles";
import Form from "../Form";

function Heading({ handleAddExperiment, hasData, disabledAddButton }) {
  const [showAdd, setShowAdd] = useState(false);

  const handleSubmit = () => {};

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
      <Form show={showAdd} onSubmit={handleSubmit} />
    </S.Container>
  );
}

export default Heading;
