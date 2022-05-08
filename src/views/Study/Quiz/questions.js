// Futebol de robôs
const robot_football = [
  {
    title: "Qual a representação do agente do AR dentro do futebol de robôs?",
    options: ["Campo", "Jogador", "Bola", "Juiz"],
    correct: "Jogador",
  },
  {
    title:
      "Um time de futebol de robôs, na categoria 2D, possui quantos jogadores em campo?",
    options: ["10", "12", "11", "9"],
    correct: "11",
  },
  {
    title:
      "Uma partida completa dentro do futebol de robôs, na categoria 2D, gasta em média quantos ciclos de tempo?",
    options: ["3000", "6000", "7000"],
    correct: "6000",
  },
  {
    title:
      "Uma partida completa dentro do futebol de robôs, na categoria 2D, gasta em média quantos ciclos de tempo?",
    options: ["Verdadeiro", "7000"],
    correct: "Verdadeiro",
  },
  {
    title: "Quais as dimensões ( X e Y ) do campo de futebol 2D?",
    options: [
      "[-52,5 ≤ Y ≤ 52,5]   [-36 ≤ X ≤ 36]",
      "[-52,5 ≤ X ≤ 52,5]   [-36 ≤ Y ≤ 36]",
      "[-52,5 < X < 52,5]   [-36 < Y < 36]",
    ],
    correct: "[-52,5 ≤ X ≤ 52,5]   [-36 ≤ Y ≤ 36]",
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
  {
    title:
      "Para qualquer ambiente em que seja possível aplicar o Aprendizado por Reforço, só existe uma maneira de mapear os estados.",
    options: [
      "As possibilidades de mapear os estados são sempre iguais para qualquer ambiente.",
      "Verdadeiro",
      "Falso",
    ],
    correct: "Falso",
  },
  {
    title:
      "Uma recompensa pode ser considerada positiva, quando  uma ação resulta em um bom resultado e negativa quando contrário, considerando isso podemos dizer que:",
    options: [
      "Uma recompensa negativa sempre deve assumir valores negativos e a positiva valores positivos.",
      "O valor da recompensa pode considerar além do resultado da ação, o estado atual e o objetivo geral do aprendizado.",
      "O valor da recompensa deve ser sempre com base na tabela de aprendizado.",
    ],
    correct:
      "O valor da recompensa pode considerar além do resultado da ação, o estado atual e o objetivo geral do aprendizado.",
  },
  {
    title:
      "Para qualquer ambiente em que seja possível aplicar o Aprendizado por Reforço, só existe uma maneira de mapear os estados.",
    options: [
      "As possibilidades de mapear os estados são sempre iguais para qualquer ambiente.",
      "Verdadeiro",
      "Falso",
    ],
    correct: "Falso",
  },
  {
    title:
      "Qual a relação do Aprendizado por Reforço com o aprendizado supervisionado e não supervisionado",
    options: [
      "Não existem relações.",
      "O Aprendizado por Reforço se assemelha com o aprendizado supervisionado, pois apesar de não receber uma base de dados com conhecimento prévio (dataset), ele utiliza o conhecimento armazenado na tabela de aprendizado de forma similar.",
      "O não supervisionado é mais similar pelo fato de também não possuir uma base de dados com conhecimento prévio (dataset).",
      "Se assemelha com os dois: 1) Aprendizado supervisionado: ele aprende com experiências anteriores quando usa a tabela de aprendizado, por exemplo. 2) Não supervisionado: aprende de maneira não supervisionada, gerando e classificando os seus dados ao longo do aprendizado.",
    ],
    correct:
      "Se assemelha com os dois: 1) Aprendizado supervisionado: ele aprende com experiências anteriores quando usa a tabela de aprendizado, por exemplo. 2) Não supervisionado: aprende de maneira não supervisionada, gerando e classificando os seus dados ao longo do aprendizado.",
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
  {
    title: "O objetivo principal do Q_learning é:",
    options: [
      "Maximizar o total de recompensas recebidas a medida que os estados vão sendo bastante visitados.",
      "Permitir que o agente defina qual a melhor ação à ser executada.",
      "Atualizar a tabela de aprendizado.",
      "Definir a quantidade de ações do ambiente.",
    ],
    correct:
      "Maximizar o total de recompensas recebidas a medida que os estados vão sendo bastante visitados.",
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
  {
    title:
      "Quanto maior o valor do parâmetro Epsilon, menor é a chance de uma ação ser escolhida de forma aleatória.",
    options: ["Verdadeiro", "Falso"],
    correct: "Falso",
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
  {
    title:
      "A plataforma UFRBots, é um sistema dedicado ao auxílio nos estudos do Aprendizado por Reforço (AR), uma técnica de Inteligência Artificial bastante conhecida e útil.",
    options: ["Verdadeiro", "Falso"],
    correct: "Falso",
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
