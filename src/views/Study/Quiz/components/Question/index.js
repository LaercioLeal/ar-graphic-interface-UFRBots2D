import React from "react";
import Option from "../Option";

import * as S from "./styles";

export default function Question({ question, onSelect }) {
  return (
    <S.Container>
      <S.Title>
        <div>
          <h1>{question.title}</h1>
        </div>
      </S.Title>
      <S.Options
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0.05,
            },
          },
        }}
      >
        {question.options.map((option) => (
          <Option
            key={option}
            option={option}
            active={question.selected === option}
            onSelect={onSelect}
          />
        ))}
      </S.Options>
    </S.Container>
  );
}
