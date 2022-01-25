import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required("Campo obrigatório."),
  document: yup
    .string()
    .required("Campo obrigatório.")
    .test("document-validation", "Esse CPF é inválido.", (value = "") => {
      return true;
    }),
});
