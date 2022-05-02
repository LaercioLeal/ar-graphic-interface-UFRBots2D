import React, { useEffect, useMemo, useState } from "react";

import { Button, Percentage } from "components";
import * as Icons from "@material-ui/icons";

import * as S from "./styles";
import Form from "../Form";

function Heading({ handleAdd, canRunAll, getDocument, runAll, data }) {
  const [showAdd, setShowAdd] = useState(true);
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
      {data.length > 0 && (
        <S.Obs>
          *as partidas não ficam salvas, faça do download dos resultados antes
          de sair dessa tela!
        </S.Obs>
      )}
      <S.Top>
        <S.Title>{data.length > 0 && "Lista de Partidas"}</S.Title>

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
                setShowAdd(false);
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
          onClick={() => setShowAdd(!showAdd)}
          variant={showAdd ? "outlined" : "secondary"}
        >
          {showAdd ? "Cancelar" : "+ Adicionar"}
        </Button>
        {percentage > 0 && (
          <Button color="blue" onClick={getDocument}>
            DOWNLOAD DOS RESULTADOS
            <Icons.CloudDownload />
          </Button>
        )}
      </S.Top>
      <Form show={showAdd} handleAdd={handleAdd} />
    </S.Container>
  );
}

export default Heading;
