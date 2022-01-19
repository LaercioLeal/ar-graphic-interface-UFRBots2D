import React, { useState } from "react";
import { Button, Input } from "components";

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

export default function Add({ isLoading, add, cancel, show }) {
  const [name, setName] = useState();

  return (
    <S.Container
      initial="closed"
      animate={show ? "visible" : "closed"}
      inherit={false}
      variants={variants}
    >
      <S.Content>
        <Input
          value={name}
          placeholder="Nome do Experimento"
          onChange={(text) => setName(text)}
          disabled={isLoading}
        />
        <S.Buttons>
          <Button color="red" onClick={cancel} isDisabled={isLoading}>
            CANCELAR
          </Button>
          <Button
            variant="secondary"
            onClick={() => add(name)}
            isDisabled={!name || isLoading}
          >
            {isLoading ? "SALVANDO" : "SALVAR"}
          </Button>
        </S.Buttons>
      </S.Content>
    </S.Container>
  );
}
