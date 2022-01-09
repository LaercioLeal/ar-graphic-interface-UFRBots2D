import React from "react";

import * as S from "./styles";

function Item({ item }) {
  return (
    <>
      <S.Image src={item.icon} />
      <S.Title>{item.title}</S.Title>
    </>
  );
}

export default Item;
