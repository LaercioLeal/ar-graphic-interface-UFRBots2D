import React from "react";
import * as S from "./styles";

export default function NoExperiments({ handleAddExperiment, data }) {
  if (data) return null;
  return <S.Container></S.Container>;
}
