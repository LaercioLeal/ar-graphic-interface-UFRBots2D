import React from "react";

import * as S from "./styles";

function Heading({ title }) {
  return (
    <S.Container>
      <S.Top>
        <S.Title>{title}</S.Title>
      </S.Top>
    </S.Container>
  );
}

export default Heading;
