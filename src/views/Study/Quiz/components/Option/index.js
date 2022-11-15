import React from "react";

import * as S from "./styles";

export default function Option({ option, active, onSelect }) {
  return (
    <S.Container
      active={active}
      whileHover={{ scale: 1.05 }}
      onClick={() => onSelect(option)}
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
    >
      <p>{option}</p>
    </S.Container>
  );
}
