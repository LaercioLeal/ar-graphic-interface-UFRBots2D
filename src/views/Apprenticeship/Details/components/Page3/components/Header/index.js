import React from "react";
import * as Icons from "@material-ui/icons";
import { useSnackbar } from "notistack";
import { downloadResults } from "../../functions";

import * as S from "./styles";
import { Button } from "components";

export default function Header({ training, results, resume }) {
  const { enqueueSnackbar } = useSnackbar();

  const getData = async () => {
    const res = await downloadResults(results);
    if (!res)
      enqueueSnackbar("Tente Novamente!", {
        variant: "error",
      });
    else enqueueSnackbar("Download realizado!", { variant: "success" });
  };

  const getPlural = (atr) => {
    return atr > 1 || atr === 0 ? "s" : "";
  };

  return (
    <S.Container>
      {!!resume && (
        <S.Resume resume>
          <p>{`${resume.victories} Vitoria${getPlural(resume.victories)}`}</p>
          <p>{`${resume.defeats} Derrota${getPlural(resume.defeats)}`}</p>
          <p>{`${resume.draws} Empate${getPlural(resume.draws)}`}</p>
        </S.Resume>
      )}
      <S.Resume>
        <p>{`${training.episodes} Episódio${getPlural(training.episodes)}`}</p>
        <p>{`Alpha ${training.alpha}`}</p>
        <p>{`Gamma ${training.gamma}`}</p>
        <p>{`Epsilon ${training.epsilon}`}</p>
      </S.Resume>
      <Button color="blue" onClick={() => getData()}>
        DOWNLOAD DOS RESULTADOS
        <Icons.CloudDownload />
      </Button>
    </S.Container>
  );
}
