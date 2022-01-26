import React, { useCallback } from "react";
// import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { Grid } from "@material-ui/core";
import { FormikProvider, useFormik } from "formik";

import * as S from "./styles";
import validationSchema from "./validations";
import { Button } from "components";
import { InputContainer as Input } from "components/Input/styles";

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
      console.log(values);
      onSubmit(values);
    },
    [onSubmit]
  );

  const form = useFormik({
    initialValues: {
      episodes: data?.episodes,
      alpha: data?.alpha,
      gamma: data?.gamma,
      epsilon: data?.epsilon,
    },
    onSubmit: handleSubmit,
    validationSchema,
    validateOnChange: false,
  });

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
                <Grid item xs={4}>
                  <Input
                    type="number"
                    name="episodes"
                    placeholder="Número de episódios"
                  />
                </Grid>

                <Grid item xs={4}>
                  <Input
                    type="number"
                    name="alpha"
                    placeholder="Taxa de Aprendizado"
                  />
                </Grid>

                <Grid item xs={4}>
                  <Input
                    type="number"
                    name="gamma"
                    placeholder="Fator de Desconto"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <Input
                    type="number"
                    name="gamma"
                    placeholder="Fator de Desconto"
                  />
                </Grid>

                <Grid item xs={4}>
                  <Input
                    type="number"
                    name="epsilon"
                    placeholder="Política e-greedy"
                  />
                </Grid>

                <Grid item xs={4}>
                  <Button
                    type="submit"
                    variant="secondary"
                    // onClick={() => form.onSubmit()}
                    disabled={!form.isValid}
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
