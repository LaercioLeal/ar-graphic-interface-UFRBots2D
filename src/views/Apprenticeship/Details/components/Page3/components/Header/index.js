import React, { useEffect, useState } from "react";
import * as Icons from "@material-ui/icons";
import { useSnackbar } from "notistack";
import { downloadResults } from "../../functions";

import * as S from "./styles";
import { Button } from "components";
import { getResultsResume } from "services";

export default function Header({ training }) {
  const { enqueueSnackbar } = useSnackbar();
  const [resume, setResume] = useState();

  useEffect(() => {
    getResultsResume(training).then((response) => {
      setResume(response.data[0]);
    });
  }, [training]);

  const getData = async (data) => {
    const res = await downloadResults(data);
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
      <Button color="blue" onClick={() => getData(training)}>
        DOWNLOAD DOS RESULTADOS
        <Icons.CloudDownload />
      </Button>
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
    </S.Container>
  );
}
