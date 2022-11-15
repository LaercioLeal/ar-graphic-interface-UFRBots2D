import React from "react";

import * as S from "./styles";

export default function Empty() {
  return (
    <S.Container>
      <S.Image />
      <h1>Você ainda não possui ensaios cadastrados :(</h1>
      <h3>
        Adicione um novo ensaio e execute para obter seus primeiros resultados{" "}
      </h3>
    </S.Container>
  );
}
