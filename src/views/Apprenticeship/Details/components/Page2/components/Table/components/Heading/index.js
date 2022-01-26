import React, { useCallback, useState } from "react";

import InputAdornment from "@material-ui/core/InputAdornment";
import SearchOutlined from "@material-ui/icons/SearchOutlined";

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
      <Form show={showAdd} onSubmit={handleAdd} />
    </S.Container>
  );
}

export default Heading;
