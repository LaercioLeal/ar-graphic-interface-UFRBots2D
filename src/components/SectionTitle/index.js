import React from "react";
import * as S from "./styles";
import ANIMATION from "./animation.config";

export default function SectionTitle({ title }) {
  return (
    <S.Container initial="hidden" animate="visible" variants={ANIMATION}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
