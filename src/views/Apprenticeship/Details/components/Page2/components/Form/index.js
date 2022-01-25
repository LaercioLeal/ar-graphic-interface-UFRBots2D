import React, { useCallback, useRef } from "react";
// import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { Grid } from "@material-ui/core";
import { FormikProvider, useFormik } from "formik";

import * as S from "./styles";
import validationSchema from "./validations";
import { Button, Input } from "components";

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
  const inputNameRef = useRef(null);

  const handleSubmit = useCallback(
    (values) => {
      onSubmit(values);
    },
    [onSubmit]
  );

  const form = useFormik({
    initialValues: {
      name: data?.name || "",
    },
    onSubmit: handleSubmit,
    validationSchema,
    validateOnChange: false,
  });

  return (
    <S.Container>
      <S.Content>
        <S.Heading>
          <S.Title>
            {isUpdate
              ? "Dados de expansão da linha"
              : "Insira os dados do novo colaborador"}
          </S.Title>

          <S.Actions>
            <Button
              variant="secondary"
              // onClick={handleUpdateClick}
              // disabled={isWarningDate}
            >
              Salvar
            </Button>
            <Button
              color="red"
              // onClick={isUpdate ? toggleDialogVisibility : onCancel}
              // disabled={isWarningDate}
            >
              Cancelar
            </Button>
          </S.Actions>
        </S.Heading>

        <FormikProvider value={form}>
          <S.Form onSubmit={form.handleSubmit} offsetOnScroll={400}>
            <S.Fieldset>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <Input
                    fullWidth
                    borderRounded
                    variant="outlined"
                    labelVariant="secondary"
                    name="name"
                    label="Nome Completo*"
                    placeholder="Insira o nome completo"
                    size="small"
                    // disabled={!isFormEnabled}
                    inputRef={inputNameRef}
                    // checkAdornment={!isFormEnabled}
                  />
                </Grid>

                <Grid item xs={2}>
                  <Input
                    fullWidth
                    borderRounded
                    variant="outlined"
                    labelVariant="secondary"
                    name="document"
                    label="CPF*"
                    placeholder="000.000.000-00"
                    mask="document"
                    size="small"
                    // disabled={!isFormEnabled}
                    // checkAdornment={!isFormEnabled}
                  />
                </Grid>

                {/* <Grid item xs={2}>
                  <Select
                    fullWidth
                    borderRounded
                    variant="outlined"
                    labelVariant="secondary"
                    name="gender"
                    label="Gênero*"
                    placeholder="Selecione"
                    size="small"
                    options={[
                      { value: 'F', label: 'Feminino' },
                      { value: 'M', label: 'Masculino' },
                      { value: 'O', label: 'Não quero informar' },
                    ]}
                    disabled={!isFormEnabled}
                    checkAdornment={!isFormEnabled}
                  />
                </Grid> */}

                {isUpdate && (
                  <>
                    <Grid item xs={2}>
                      <Input
                        fullWidth
                        borderRounded
                        variant="outlined"
                        labelVariant="secondary"
                        name="createdAt"
                        label="Data Inclusão"
                        placeholder="00/00/0000"
                        size="small"
                        disabled
                        // checkAdornment={!isFormEnabled}
                      />
                    </Grid>

                    <Grid item xs={2}>
                      <Input
                        fullWidth
                        borderRounded
                        variant="outlined"
                        labelVariant="secondary"
                        name="status"
                        label="Status"
                        size="small"
                        placeholder="--"
                        disabled
                      />
                    </Grid>
                  </>
                )}
              </Grid>

              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <Input
                    fullWidth
                    borderRounded
                    variant="outlined"
                    labelVariant="secondary"
                    name="email"
                    label="E-mail*"
                    placeholder="nome@email.com"
                    size="small"
                    // disabled={!isFormEnabled}
                    // checkAdornment={!isFormEnabled}
                  />
                </Grid>

                <Grid item xs={2}>
                  <Input
                    fullWidth
                    borderRounded
                    variant="outlined"
                    labelVariant="secondary"
                    name="phone"
                    label="Celular*"
                    placeholder="(00) 0 0000-0000"
                    mask="cellphone"
                    size="small"
                    // disabled={!isFormEnabled}
                    // checkAdornment={!isFormEnabled}
                  />
                </Grid>

                <Grid item xs={2}>
                  <Input
                    fullWidth
                    borderRounded
                    variant="outlined"
                    labelVariant="secondary"
                    name="birthdate"
                    label="Data de Nascimento*"
                    placeholder="00/00/0000"
                    size="small"
                    mask="date"
                    // disabled={!isFormEnabled}
                    // checkAdornment={!isFormEnabled}
                  />
                </Grid>

                {isUpdate && (
                  <Grid item xs={2}>
                    <Input
                      fullWidth
                      borderRounded
                      variant="outlined"
                      labelVariant="secondary"
                      name="deletedAt"
                      label="Data Inativação"
                      placeholder="00/00/0000"
                      size="small"
                      disabled
                      // checkAdornment={!isFormEnabled && data.deletedAt}
                    />
                  </Grid>
                )}
              </Grid>
            </S.Fieldset>
          </S.Form>
        </FormikProvider>
      </S.Content>
    </S.Container>
  );
}

export default Form;
