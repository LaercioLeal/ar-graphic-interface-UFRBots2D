import { Button, Input } from "components";
import React, { useState } from "react";
// import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
// import { Grid } from "@material-ui/core";
// import { FormikProvider, useFormik } from "formik";

// import { themes } from '@saude-facil/styles'
// import { isZipcode, useDebounce } from '@saude-facil/tools'
// import { Button, Input, Select, Modals } from '@saude-facil/componentsv2'
// import { getAddressByZipcode } from '@saude-facil/services/lib/api/addresses'

import * as S from "./styles";

const variants = {
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};

function Form({ data, onUpdate, onDelete, isLoading }) {
  const [showEdit, setEdit] = useState(false);
  const [reqConfirm, setReqConfirm] = useState(false);
  const [name, setName] = useState(data.title);

  const reset = () => {
    setEdit(false);
    setReqConfirm(false);
  };

  const handleUpdate = () => {
    onUpdate({ ...data, title: name });
    setName("");
    reset();
  };

  return (
    <S.Container
      initial="closed"
      animate={"visible"}
      inherit={false}
      variants={variants}
    >
      {reqConfirm && <h1>Deseja continuar com a remoção?</h1>}
      <S.Buttons
        initial="closed"
        animate={!showEdit ? "visible" : "closed"}
        variants={variants}
      >
        {reqConfirm && (
          <Button color="red" onClick={() => setReqConfirm(false)}>
            CANCELAR
          </Button>
        )}
        {!reqConfirm && (
          <Button variant="secondary" onClick={() => setEdit(!showEdit)}>
            EDITAR
          </Button>
        )}
        <Button
          color={reqConfirm ? "blue" : "red"}
          onClick={() => (reqConfirm ? onDelete(data.id) : setReqConfirm(true))}
        >
          {reqConfirm ? "CONFIRMAR" : "REMOVER"}
        </Button>
      </S.Buttons>
      {showEdit && (
        <S.EditContainer>
          <Input
            value={name}
            placeholder="Nome do Experimento"
            onChange={(text) => setName(text)}
            disabled={isLoading}
          />
          <Button color="red" onClick={() => setEdit(!showEdit)}>
            CANCELAR
          </Button>
          <Button variant="secondary" onClick={handleUpdate}>
            SALVAR
          </Button>
        </S.EditContainer>
      )}
    </S.Container>
  );
}

export default Form;
