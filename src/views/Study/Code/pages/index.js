import { snippets } from "./snippets";

import p01 from "./images/p-0-1.png";
import p02 from "./images/p-0-2.png";
import p03 from "./images/p-0-3.png";

import p11 from "./images/p-1-1.png";

const pages = [
  {
    page: 0,
    message:
      "Excelente ideia! Agora vamos conhecer um pouco da lógica por traz de um código de Aprendizado por Reforço.",
    infos: [
      {
        title: "Ideia base",
        description: `<p>Antes de tudo, precisamos definir o escopo geral do funcionamento de nosso código. Para nosso robô 
        conseguir aprender a jogar em campo vamos ter que considerar a interação direta dele com o ambiente.</p></br>
          
        <p>Esse ambiente é representado pelo campo de futebol, mas devemos considerar que ele é composto de posições que os 
        robôs podem asssumir, robôs adversários e do mesmo time, áreas de ataque, defesa e meio de campo, a bola e tudo mais 
        que compõe esse ambiente em familiar.</p></br>
          
        <p>Na figura abaixo é possível observar, a relação de interação de cada robô (vamos chamar ele de agente a partir de 
        agora) do nosso time com o ambiente. Primeiro o agente, em um estado do ambiente, executa uma ação (que nesse caso 
        pode ser um chute, drible, passe, dentre outros), onde isso vai gerar um retorno para ele, que é uma recompensa 
        e o seu próximo estado.</p>`,
      },
      {
        image: p01,
      },
      {
        description: `<p>Esse estado nada mais é do que uma configuração especifica na qual o agente se encontra, e isso 
        pode ser relacionado de diversas maneiras, como por exemplo: a proximidade de um adversário, uma posição específica 
        dentro do campo ou a distância em relação ao gol.</p></br>
        
        <p>E essa recompensa recebida é muito importante, pois é com ela que o agente vai começar a entender se ele deve ou 
        não executar essa ação quando estiver nesse estado. Esse é o processo principal do aprendizado, cada retorno será
        responsável por atualizar a table de aprendizado, chamada de 'Q'. Essa tabela possui as dimensões definidas pelo
        número de estados e ações do ambinente, um exemplo pode ser observado na imagem abaixo.</p>`,
      },
      {
        image: p02,
      },
      {
        description: `<p>Dessa maneira, cada robô saberá qual melhor ação a ser executada para cada estado, basta verificar
        qual possui o maior valor estimado, como ha imagem nos indica os maiores valores para cada estado (destacados de azul). 
        Para esse exemplo, é possível então mapear as melhoras ações para cada estado:</p>`,
      },
      {
        image: p03,
      },
      {
        description: `<p>obs: vale ressaltar que essa tabela de aprendizado pode iniciar com todos os valores iguais a zero 
        ou aleatórios.</p>`,
      },
    ],
  },
  {
    page: 1,
    message:
      "Após entender o fluxo principal do que deve ser feito, vamos agora começar a implementar as funcionalidades básicas",
    infos: [
      {
        title: "Definindo nossas ações",
        description: `<p>Uma ação é o que o agente executa no ambiente, sendo assim podemos elencar o que nosso agente pode 
        realizar:</p></br>

        <ul>
          <li>Ação 1: Chute - o agente executa um chute em direção ao gol adversário;</li>
          <li>Ação 2: Lançamento - é feito um lançamento de bola em direção a área de ataque;</li>
          <li>Ação 3: Passe 1 - é realizado um passe do tipo 1 para outro agente do mesmo time;</li>
          <li>Ação 4: Passe 2 - é realizado um passe do tipo 2 para outro agente do mesmo time;</li>
          <li>Ação 5: Drible 1 - o agente executa um drible do tipo 1;</li>
          <li>Ação 6: Drible 2 - o agente executa um drible do tipo 2.</li>
        </ul></br>

        <p>Assim, totalizamos 6 ações que o nosso agente pode executar e vamos considerar também que nosso ambiente possue
        15 estados. Dessa maneira, podemos construir uma função que 
        vai escolher uma ação para ser executada em cada estado do ambiente, consultado a tabela de aprendizado Q, 
        conforme discutido anteriormente.</p></br>
        
        <p>Dessa maneira, podemos então construir uma rotina que vai retornar a melhor ação a ser realizada para um estado:</p></br>
        `,
        code: snippets["definir_acao_1"],
        language: "c",
      },
      {
        description: `<p>Contudo, precisamos pensar no seguinte cenário:</p></br>

        <ul>
          <li>1: Suponha que a ação 1 seja a melhor a ser executada no estado 14;</li>
          <li>2: Mas na primeira execução dela, o ambiente retorne uma recompensa com valor menor com relação as demais ações;</li>
          <li>3: Então, a ação 1 não seria mais escolhida, para esse estado;</li>
          <li>4: Podemos concluir que somente escolher uma ação pelo maior valor de uma linha da tabela durante o aprendizado, pode 
          ser um processo muito tendencioso.</li>
        </ul></br>

        <p>Para contornar problemas como esse, podemos então escolher aleatoriamente as ações a serem executadas em algumas jogadas, 
        isso é muito importante para fazer com que nossa tabela seja bem estimada, ou seja, todas as ações serão bem testadas, a ponto
        de aprendizado definir qual ação realmente se demonstrou mais alinhada com o objetivo geral.</p></br>

        <p>Sendo assim, podemos incluir o parâmetro 'e_greedy' em nosso código, ele vai ser responsável em decidir quando uma ação 
        deve ser escolhida aleatoriamente ou com base na tabela Q. Se o seu valor for 0.1, por exmplo, significa que a cada 100 jogadas, 10 serão aleatórias.</p></br>
        `,
        code: snippets["definir_acao_2"],
        language: "c",
      },
      {
        description: `<p>Para melhorar o entendimento, vamos observar esse fluxograma:</p></br>
        `,
      },
      {
        image: p11,
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
