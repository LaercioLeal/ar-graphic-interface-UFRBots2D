import React, { useCallback, useState } from "react";

import InputAdornment from "@material-ui/core/InputAdornment";
import SearchOutlined from "@material-ui/icons/SearchOutlined";

import { Button } from "components";

import * as S from "./styles";
import Add from "../../../Add";

function Heading({ handleAddExperiment, disabledAddButton, onFilter }) {
  const [showAdd, setShowAdd] = useState(false);

  const handleChange = useCallback(
    (e) => {
      onFilter(e.target.value);
    },
    [onFilter]
  );

  return (
    <S.Container>
      <Add
        add={handleAddExperiment}
        cancel={() => setShowAdd(!showAdd)}
        show={showAdd}
        large
      />
      {!showAdd && (
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
            onClick={() => setShowAdd(!showAdd)}
            disabled={disabledAddButton || showAdd}
          >
            + Adicionar
          </Button>
        </S.Top>
      )}

      <S.Title>Lista de Experimentos</S.Title>
    </S.Container>
  );
}

export default Heading;
