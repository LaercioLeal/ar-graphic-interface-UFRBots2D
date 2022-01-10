import React from "react";

import * as S from "./styles";

function Item({ item }) {
  return (
    <>
      <S.Image
        src={item.icon}
        layoutId={`icon-page-${item.page}`}
        transition={{ duration: 1 }}
      />
      <S.Title>{item.title}</S.Title>
    </>
  );
}

export default Item;
