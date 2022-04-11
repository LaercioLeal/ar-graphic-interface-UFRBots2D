import React from "react";
import { Button } from "components";
import * as Icons from "@material-ui/icons";
import * as S from "./styles";
import { useSnackbar } from "notistack";

import icon from "assets/icon/article.png";

export default function Article({ article }) {
  const { enqueueSnackbar } = useSnackbar();
  return (
    <S.Card>
      <S.Header>
        <S.Image
          src={icon}
          animate={{ rotate: 360, delay: 1 }}
          transition={{ duration: 1 }}
        />
        <S.Info>{article.title}</S.Info>
      </S.Header>
      <div>
        <Button
          color="blue"
          onClick={() => window.open(article.link, "_blank")}
        >
          <Icons.OpenInNewOutlined />
        </Button>
        <Button
          color="white"
          onClick={() => {
            navigator.clipboard.writeText(article.link);
            enqueueSnackbar(`Link copiado!`, { variant: "info" });
          }}
        >
          <Icons.FileCopyOutlined />
        </Button>
      </div>
    </S.Card>
  );
}
