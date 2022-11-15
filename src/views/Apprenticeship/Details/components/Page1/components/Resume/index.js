import React, { useMemo } from "react";
import { parserResume } from "../../functions";
import ANIMATION from "./animation.config";
import * as S from "./styles";
import * as extS from "../Table/styles";

export default function Resume({ data }) {
  const resume = useMemo(() => {
    return parserResume(data);
  }, [data]);

  return (
    <S.Container initial="hidden" animate="visible" variants={ANIMATION}>
      {resume.map((item) => {
        return (
          <S.Shortcut>
            <p>{item.title}</p>
            <p>{`${item.value} GOLS`}</p>
            <S.Items comb={item.comb.length > 3}>
              {item.comb.map((value) => (
                <extS.Status>{value}</extS.Status>
              ))}
            </S.Items>
          </S.Shortcut>
        );
      })}
    </S.Container>
  );
}
