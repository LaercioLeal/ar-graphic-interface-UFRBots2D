import React from "react";

import * as S from "./styles";

export default function Heading({ page, title, icon }) {
  return (
    <S.Container>
      <S.Image
        src={icon}
        animate={{ rotate: 360, delay: 1 }}
        layoutId={`icon-page-${page}`}
        transition={{ duration: 1 }}
      />
      <S.Title
        animate={{ x: 25 }}
        transition={{ type: "spring", stiffness: 50, delay: 1 }}
      >
        {title}
      </S.Title>
    </S.Container>
  );
}
