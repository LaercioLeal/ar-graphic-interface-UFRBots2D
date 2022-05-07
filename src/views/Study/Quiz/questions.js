// Futebol de robôs
const robot_football = [
  {
    title: "Qual a representação do agente do AR dentro do futebol de robôs?",
    options: ["Campo", "Jogador", "Goleiro", "Juiz"],
    correct: "Jogador",
  },
];

// * Aprendizado por Reforço
const reinforcement_learning = [
  {
    title: "O agente recebe do ambiente quais informações?",
    options: [
      "Estado Atual e Recompensa",
      "Recompensa e Ação",
      "Gol e Reforço",
      "Recompensa e Estado Futuro",
    ],
    correct: "Recompensa e Estado Futuro",
  },
];

// TODO Q-learning
const q_learning = [
  {
    title:
      "De acordo com equação do Q_Learning, quais parâmetros estão presentes?",
    options: [
      "Valor Atual da Tabela, Taxa de Aprendizado, Fator de Desconto, Recompensa e o valor máximo da ação atual considerando a tabela inteira",
      "Valor Atual da Tabela, Taxa de Aprendizado, Fator de Desconto e Recompensa",
      "Recompensa e maior valor da tabela Q",
      "Recompensa e quantidade de pontos marcados pelo agente do AR",
    ],
    correct:
      "Valor Atual da Tabela, Taxa de Aprendizado, Fator de Desconto e Recompensa",
  },
];

// ! Parâmetros (alpha e gamma)
const parameters = [
  {
    title:
      "Quais são os parâmetros básicos que você deve definir para a equação do Q_Learning?",
    options: [
      "Alpha, Beta e Gamma",
      "Gamma e Beta",
      "Gamma e Alpha",
      "Alpha, Gamma e Epsilon",
    ],
    correct: "Gamma e Alpha",
  },
];

// ? interface
const graphic_interface = [
  {
    title:
      "O Algoritmo seguinte é de Aprendizado por Reforço e foi utilizado no time desta plataforma, também demonstrado na seção de explicação de código.",
    options: ["SARSA", "Q_Learning", "Deep Learning", "Redes Neurais"],
    correct: "Q_Learning",
  },
];

const questions = [
  ...robot_football,
  ...reinforcement_learning,
  ...q_learning,
  ...parameters,
  ...graphic_interface,
]
  .sort(() => Math.random() - 0.5)
  .map((item, index) => {
    return { ...item, id: index + 1 };
  });

export { questions };
