import React from "react";
import { Button } from "components";
import * as Icons from "@material-ui/icons";
import * as S from "./styles";
import { useSnackbar } from "notistack";

export default function Movie({ movie }) {
  const { enqueueSnackbar } = useSnackbar();
  return (
    <S.Card>
      <div>
        <iframe src={movie.link} title={movie.title} frameborder="0" />
        <S.Info>{movie.title}</S.Info>
      </div>
      <div>
        <Button color="blue" onClick={() => window.open(movie.link, "_blank")}>
          <Icons.PlayArrowOutlined />
        </Button>
        <Button
          color="white"
          onClick={() => {
            navigator.clipboard.writeText(movie.link);
            enqueueSnackbar(`Link copiado!`, { variant: "info" });
          }}
        >
          <Icons.FileCopyOutlined />
        </Button>
      </div>
    </S.Card>
  );
}
