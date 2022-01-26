import React, { useCallback } from "react";
// import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { Grid } from "@material-ui/core";
import { FormikProvider, useFormik } from "formik";

import * as S from "./styles";
import validationSchema from "./validations";
import { Button, Input } from "components";
// import { InputContainer as Input } from "components/Input/styles";

function Form({
  data,
  isUpdate,
  onSubmit,
  onCancel,
  onToggleActivation,
  isLoading,
  loadingText,
  isWarningDate,
}) {
  const handleSubmit = useCallback(
    (values) => {
      onSubmit(values);
    },
    [onSubmit]
  );

  const form = useFormik({
    initialValues: {
      episodes: "",
      alpha: "0.0",
      gamma: "0.0",
      epsilon: "0.0",
    },
    onSubmit: handleSubmit,
    validationSchema,
    validateOnChange: true,
  });

  const handleClick = useCallback(() => {
    form.handleSubmit();
  }, [form]);

  return (
    <S.Container>
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
                    value={form.values.episodes}
                    error={form.errors.episodes}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Input
                    type="number"
                    step=".001"
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
                    step=".001"
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
                    step=".001"
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
                    onClick={handleClick}
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
