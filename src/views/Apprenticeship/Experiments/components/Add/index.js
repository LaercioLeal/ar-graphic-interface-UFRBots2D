import React from "react";
import { Button } from "components";

import * as S from "./styles";

const variants = {
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

export default function Add({ add, cancel, show }) {
  return (
    <S.Container
      initial="closed"
      animate={show ? "visible" : "closed"}
      inherit={false}
      variants={variants}
    >
      <S.Content>
        <S.Buttons>
          <Button color="red" onClick={cancel}>
            CANCELAR
          </Button>
          <Button variant="secondary" onClick={() => add("title")}>
            SALVAR
          </Button>
        </S.Buttons>
      </S.Content>
    </S.Container>
  );
}
