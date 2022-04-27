import { snippets } from "./snippets";

const pages = [
  {
    page: 0,
    message:
      "Excelente ideia! Agora vamos conhecer um pouco da lógica por traz de um código de Aprendizado por Reforço.",
    codes: [
      {
        title: "Título Principal",
        description: "Esse código é responsável por ..",
        code: snippets["code1"],
        language: "c",
      },
    ],
  },
  {
    page: 1,
    message: "Você está na página 1",
    codes: [
      {
        title: "Título Principal",
        description: "Esse código é responsável por ..",
        code: snippets["code1"],
        language: "c",
      },
    ],
  },
  {
    page: 2,
    message: "Você está na página 2",
    codes: [
      {
        title: "Título Principal",
        description: "Esse código é responsável por ..",
        code: snippets["code1"],
        language: "c",
      },
    ],
  },
];

export default pages;
