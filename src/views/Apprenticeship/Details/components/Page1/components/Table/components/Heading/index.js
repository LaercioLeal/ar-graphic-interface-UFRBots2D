import React from "react";
import { Button } from "components";
import { useSnackbar } from "notistack";
import * as Icons from "@material-ui/icons";
import { downloadResults } from "../../../../functions";

import * as S from "./styles";

function Heading({ data, setType, type, showChangeData }) {
  const { enqueueSnackbar } = useSnackbar();

  const getData = async () => {
    const res = await downloadResults(data);
    if (!res)
      enqueueSnackbar("Tente Novamente!", {
        variant: "error",
      });
    else enqueueSnackbar("Download realizado!", { variant: "success" });
  };

  return (
    <S.Container>
      <S.Section>
        <S.Title>{data.length > 0 && "Combinações de Parâmetros"}</S.Title>
        {showChangeData && (
          <Button
            color="purple"
            onClick={() => setType(type === "sum" ? "average" : "sum")}
          >
            {`VISUALIZAR ${type === "sum" ? "MÉDIA" : "SOMA"}`}
            <Icons.LoopOutlined />
          </Button>
        )}
        <Button color="blue" onClick={() => getData()}>
          DOWNLOAD DOS RESULTADOS
          <Icons.CloudDownload />
        </Button>
      </S.Section>
      {/* <S.Section>
        <h1>-</h1>
        <h1>Média</h1>
        <h1>Soma</h1>
      </S.Section> */}
    </S.Container>
  );
}

export default Heading;
