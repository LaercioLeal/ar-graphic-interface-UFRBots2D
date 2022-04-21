import React from "react";
import * as S from "./styles";
import ANIMATION from "./animation.config";

export default function Percentage({
  id = "percentage",
  percentage,
  width = 100,
}) {
  return (
    <S.Legend
      width={width}
      layoutId={`percentage-${id}`}
      transition={{ duration: 0.5, delay: 0.2 }}
      initial="hidden"
      animate="visible"
      variants={ANIMATION}
      whileHover={{ scale: 1.2 }}
    >
      <S.Percentage>{`${percentage}%`}</S.Percentage>
      <S.Progress>
        <S.Bar width={percentage} />
        <S.BarOff width={percentage} />
      </S.Progress>
    </S.Legend>
  );
}
