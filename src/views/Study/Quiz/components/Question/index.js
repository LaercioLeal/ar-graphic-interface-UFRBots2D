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
              delayChildren: 0.3,
              staggerChildren: 0.1,
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
