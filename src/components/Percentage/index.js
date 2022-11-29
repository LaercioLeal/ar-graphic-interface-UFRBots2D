import React from "react";
import * as S from "./styles";
import ANIMATION from "./animation.config";

export default function Percentage({
  id = "percentage",
  percentage,
  width = 100,
  noTitle = false,
  center = false,
  noHover = false,
}) {
  return (
    <S.Legend
      width={width}
      layoutId={`percentage-${id}`}
      transition={{ duration: 0.5, delay: 0.2 }}
      initial="hidden"
      animate="visible"
      variants={ANIMATION}
      whileHover={{ scale: noHover ? 1 : 1.2 }}
    >
      {!noTitle && (
        <S.Percentage center={center}>{`${percentage}%`}</S.Percentage>
      )}
      <S.Progress>
        <S.Bar width={percentage} />
        <S.BarOff width={percentage} />
      </S.Progress>
    </S.Legend>
  );
}
