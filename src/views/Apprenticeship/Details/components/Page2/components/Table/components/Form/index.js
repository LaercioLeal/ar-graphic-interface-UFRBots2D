import React, { useCallback } from "react";
import { Grid } from "@material-ui/core";
import { FormikProvider, useFormik } from "formik";

import * as S from "./styles";
import validationSchema from "./validations";
import { Button, Input } from "components";

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

function Form({ handleAdd, show }) {
  const handleSubmit = useCallback(
    (values) => {
      handleAdd(values);
    },
    [handleAdd]
  );

  const form = useFormik({
    initialValues: {
      episodes: "10",
      alpha: "0.1",
      gamma: "0.1",
      epsilon: "0.1",
    },
    onSubmit: handleSubmit,
    validationSchema,
    validateOnChange: true,
  });

  return (
    <S.Container
      initial="closed"
      animate={show ? "visible" : "closed"}
      inherit={false}
      variants={variants}
    >
      <S.Content>
        <FormikProvider value={form}>
          <S.Form onSubmit={form.handleSubmit} offsetOnScroll={400}>
            <S.Fieldset>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <S.Title>Insira os dados do novo ensaio</S.Title>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={8}>
                  <Input
                    type="number"
                    id="episodes"
                    name="episodes"
                    placeholder="Número de Episódios"
                    label="Número de Episódios"
                    onChange={form.handleChange}
                    value={parseInt(form.values.episodes)}
                    error={form.errors.episodes}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Input
                    type="number"
                    step=".1"
                    name="alpha"
                    placeholder="Taxa de Aprendizado"
                    label="Taxa de Aprendizado"
                    onChange={form.handleChange}
                    value={form.values.alpha}
                    error={form.errors.alpha}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <Input
                    type="number"
                    step=".1"
                    name="gamma"
                    placeholder="Fator de Desconto"
                    label="Fator de Desconto"
                    onChange={form.handleChange}
                    value={form.values.gamma}
                    error={form.errors.gamma}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Input
                    type="number"
                    step=".1"
                    name="epsilon"
                    placeholder="Política e-greedy"
                    label="Política e-greedy"
                    onChange={form.handleChange}
                    value={form.values.epsilon}
                    error={form.errors.epsilon}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Button
                    type="submit"
                    variant="secondary"
                    onClick={form.handleSubmit}
                    isDisabled={!form.isValid}
                  >
                    Adicionar
                  </Button>
                </Grid>
              </Grid>
            </S.Fieldset>
          </S.Form>
        </FormikProvider>
      </S.Content>
    </S.Container>
  );
}

export default Form;
