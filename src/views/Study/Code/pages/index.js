import { snippets } from "./snippets";
import arEnvironment from "./images/ar_environment_agent.png";

const pages = [
  {
    page: 0,
    message:
      "Excelente ideia! Agora vamos conhecer um pouco da lógica por traz de um código de Aprendizado por Reforço.",
    infos: [
      {
        title: "Ideia base",
        description: `<p>Antes de tudo, precisamos definir o escopo geral do funcionamento de nosso código. Para nosso robô conseguir aprender a jogar em campo vamos ter que considerar a interação direta dele com o ambiente.</p></br>
          
        <p>Esse ambiente é representado pelo campo de futebol, mas devemos considerar que ele é composto de posições que os robôs podem asssumir, robôs adversários e do mesmo time, áreas de ataque, defesa e meio de campo, a bola e tudo mais que compõe esse ambiente em familiar.</p></br>
          
        <p>Na figura abaixo é possível observar, a relação de interação de cada robô (vamos chamar ele de agente a partir de agora) do nosso time com o ambiente. Primeiro o agente, em um estado do ambiente, executa uma ação (que nesse caso pode ser um chute, drible, passe, dentre outros), onde isso vai gerar um retorno para ele, que é uma recompensa e o seu próximo estado.</p>`,
      },
      {
        image: arEnvironment,
      },
      {
        description: `<p>Esse estado nada mais é do que uma configuração especifica na qual o agente se encontra, e isso pode ser relacionado de diversas maneiras, como por exemplo: a proximidade de um adversário, uma posição específica dentro do campo ou a distância em relação ao gol. E essa recompensa recebida é muito importante, pois é com ela que o agente vai começar a entender se ele deve ou não executar essa ação quando estiver nesse estado.</p>`,
      },
    ],
  },
  {
    page: 1,
    message: "Você está na página 1",
    infos: [
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
    infos: [
      {
        title: "Título Principal",
        description: "Esse código é responsável por ..",
        code: snippets["code1"],
        language: "c",
      },
    ],
  },
  {
    page: 3,
    message: "Você está na página 3",
    infos: [],
  },
];

export default pages;
