import * as yup from "yup";

export default yup.object().shape({
  episodes: yup
    .number()
    .min(1, "Número inválido.")
    .max(100)
    .required("Campo obrigatório."),
  alpha: yup
    .number()
    .test("is-decimal", "invalid decimal", (value) =>
      (value + "").match(/^\d*\.{1}\d*$/)
    ),
  gamma: yup.number().min(0).max(1).required("Campo obrigatório."),
  epsilon: yup.number().min(0).max(1).required("Campo obrigatório."),
});
