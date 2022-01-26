import * as yup from "yup";

const validDecimal = (value) => (value + "").match(/^\d*\.{1}\d*$/);
const validRange = (value) => value > 0 && value <= 1;

export default yup.object().shape({
  episodes: yup
    .string()
    .required("Campo obrigatório")
    .min(1, "Número inválido.")
    .test(
      "is-valid",
      "número deve ser maior ou igual a 1",
      (value) => value >= 1
    ),
  alpha: yup
    .string()
    .required("Campo obrigatório")
    .test("is-decimal", "número deve estar em 0 e 1", validDecimal)
    .test("is-decimal", "número deve estar em 0 e 1", validRange),
  gamma: yup
    .string()
    .required("Campo obrigatório")
    .test("is-decimal", "número deve estar em 0 e 1", validDecimal)
    .test("is-decimal", "número deve estar em 0 e 1", validRange),
  epsilon: yup
    .string()
    .required("Campo obrigatório")
    .test("is-decimal", "número deve estar em 0 e 1", validDecimal)
    .test("is-decimal", "número deve estar em 0 e 1", validRange),
});
