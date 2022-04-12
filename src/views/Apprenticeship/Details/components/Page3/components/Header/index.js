import React from "react";
import * as Icons from "@material-ui/icons";
import { useSnackbar } from "notistack";
import { downloadResults } from "../../functions";

import * as S from "./styles";
import { Button } from "components";

export default function Header({ training }) {
  const { enqueueSnackbar } = useSnackbar();

  const getData = async (data) => {
    const res = await downloadResults(data);
    if (!res)
      enqueueSnackbar("Tente Novamente!", {
        variant: "error",
      });
    else enqueueSnackbar("Download realizado!", { variant: "success" });
  };

  return (
    <S.Container>
      <S.Parameters>
        <p>{`${training.episodes} episódios`}</p>
        <p>{`Alpha ${training.alpha}`}</p>
        <p>{`Gamma ${training.gamma}`}</p>
        <p>{`Epsilon ${training.epsilon}`}</p>
      </S.Parameters>
      <Button color="blue" onClick={() => getData(training)}>
        DOWNLOAD DOS RESULTADOS
        <Icons.CloudDownload />
      </Button>
    </S.Container>
  );
}
