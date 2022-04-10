import React, { useEffect, useMemo, useState } from "react";

import { Button, Percentage } from "components";

import * as S from "./styles";
import Form from "../Form";

function Heading({ handleAdd, canRunAll, runAll, data }) {
  const [showAdd, setShowAdd] = useState(false);
  const [showRunAll, setShowRunAll] = useState(false);

  const percentage = useMemo(() => {
    const done = data.filter((item) => item.status === "done").length;
    const total = data.length;
    return !data.length ? 0 : ((done / total) * 100).toFixed(0);
  }, [data]);

  useEffect(() => {
    setShowRunAll(canRunAll);
  }, [canRunAll]);

  return (
    <S.Container>
      <S.Top>
        <S.Title>{data.length > 0 && "Lista de Ensaios"}</S.Title>

        {data.length > 0 && (
          <Percentage
            id={data[0].idExperiment}
            percentage={percentage}
            width={10}
          />
        )}
        {data.length > 0 && showRunAll && (
          <>
            <Button
              onClick={() => {
                setShowRunAll(false);
                runAll();
              }}
              variant="secondary"
              color="success"
            >
              Executar todos
            </Button>
          </>
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
