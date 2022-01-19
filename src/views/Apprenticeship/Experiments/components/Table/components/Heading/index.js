import React, { useCallback } from "react";

import InputAdornment from "@material-ui/core/InputAdornment";
import SearchOutlined from "@material-ui/icons/SearchOutlined";

import { Button } from "components";

import * as S from "./styles";

function Heading({ onAddButtonClick, disabledAddButton, onFilter }) {
  const handleChange = useCallback(
    (e) => {
      onFilter(e.target.value);
    },
    [onFilter]
  );

  return (
    <S.Container>
      <S.Top>
        <S.Input
          id="search"
          name="search"
          placeholder="Buscar por termo"
          startAdornment={
            <InputAdornment position="start">
              <SearchOutlined />
            </InputAdornment>
          }
          onChange={handleChange}
          autoComplete="off"
        />

        <Button
          variant="secondary"
          onClick={onAddButtonClick}
          disabled={disabledAddButton}
        >
          + Adicionar
        </Button>
      </S.Top>

      <S.Title>Lista de Experimentos</S.Title>
    </S.Container>
  );
}

export default Heading;
