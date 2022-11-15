import { snippets } from "./snippets";

import p11 from "./images/p-1-1.png";
import p12 from "./images/p-1-2.png";
import p13 from "./images/p-1-3.png";

import p21 from "./images/p-2-1.png";

import p31 from "./images/p-3-1.png";

import p41 from "./images/p-4-1.png";

import p51 from "./images/p-5-1.png";

import p61 from "./images/p-6-1.png";

const pages = [
  {
    page: 0,
    message:
      "Excelente ideia! Agora vamos conhecer um pouco da lógica por trás de um código de Aprendizado por Reforço.",
    infos: [
      {
        title: "Ideia base",
        description: `<p>Antes de tudo, precisamos definir o escopo geral do funcionamento de nosso código. Para nosso robô 
        conseguir aprender a jogar em campo vamos ter que considerar a interação direta dele com o ambiente.</p></br>
          
        <p>Esse ambiente é representado pelo campo de futebol, mas devemos considerar que ele é composto de posições que os 
        robôs podem assumir, robôs adversários e do mesmo time, áreas de ataque, defesa e meio de campo, a bola e tudo mais 
        que compõem esse ambiente.</p></br>
          
        <p>Na figura abaixo é possível observar, a relação de interação de cada robô (vamos chamar ele de agente a partir de 
        agora) do nosso time com o ambiente. Primeiro o agente, em um estado do ambiente, executa uma ação (que nesse caso 
        pode ser um chute, drible, passe, dentre outros), onde isso vai gerar um retorno para ele, que é uma recompensa 
        e o seu próximo estado.</p>`,
      },
      {
        image: p11,
      },
      {
        description: `<p>Esse estado nada mais é do que uma configuração específica na qual o agente se encontra, e isso 
        pode ser relacionado de diversas maneiras, como por exemplo: a proximidade de um adversário, uma posição específica 
        dentro do campo ou a distância em relação ao gol.</p></br>
        
        <p>E essa recompensa recebida é muito importante, pois é com ela que o agente vai começar a entender se ele deve ou 
        não executar essa ação quando estiver nesse estado. Esse é o processo principal do aprendizado, cada retorno será
        responsável por atualizar a tabela de aprendizado, chamada de 'Q'. Essa tabela possui as dimensões definidas pelo
        número de estados e ações do ambiente, um exemplo pode ser observado na imagem abaixo.</p>`,
      },
      {
        image: p12,
      },
      {
        description: `<p>Dessa maneira, cada robô saberá qual melhor ação a ser executada para cada estado, basta verificar 
        qual possui o maior valor estimado, como a imagem nos indica os maiores valores para cada estado (destacados de azul). 
        Para esse exemplo, é possível então mapear as melhores ações para cada estado:</p>`,
      },
      {
        image: p13,
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
        title: "Mapeando os estados do ambiente",
        description: `<p>A configuração de estados de um ambiente, pode levar em consideração diversos detalhes, muitas das 
        vezes alinhados com o objetivo geral do aprendizado. Podemos mapear os estados em que os agentes (jogadores) vão 
        estar em campo, com base no posicionamento, distância entre jogadores do mesmo time ou do time adversário, 
        proximidade do gol, grande área e outros, além da possibilidade de combinar essas informações.</p></br>
        
        <p>Para este cenário, vamos considerar apenas as posições em campo, dividindo toda a área em seções e subáreas.</p>`,
      },
      {
        image: p21,
      },
      {
        description: `<p>Com essa divisão, temos então 15 estados. As seções são essas divididas em direção ao gol 
        adversaŕio (A, B, C, D e E) e as linhas na horizontal definem as subáreas do 01 ao 15.</p></br>`,
      },
    ],
  },
  {
    page: 2,
    message: "E agora? Como cada estado retorna uma recompensa?",
    infos: [
      {
        title: "Mapeando os Reforços (Recompensa)",
        description: `<p>De acordo com o fluxo geral de funcionamento do AR, precisamos agora definir a recompensa do ambiente 
        para cada ação executada. Essa etapa também pode ser modelada de diversas maneiras, contudo iremos realizar uma 
        abordagem alinhada com a nossa divisão do campo em seções.</p></br>

        <p>Vamos então definir para cada seção um valor de recompensa positivo e outro negativo. Uma recompensa positiva nesse 
        cenário, será quando o time manter a posse de bola ou realizar um gol e consequentemente a negativa quando perder 
        a posse de bola. Então segue a tabela abaixo com os valores definidos para cada seção.</p>`,
      },
      {
        image: p31,
      },
      {
        description: `<p>Dessa maneira, cada subárea correspondente a sua seção, será um estado que retorna seus respectivos 
        valores de recompensa.</p>`,
      },
      {
        description: `<p>O próximo passo agora será definir as nossas ações :D</p>`,
      },
    ],
  },
  {
    page: 3,
    message:
      "Como nosso jogador vai saber qual ação ele deve executar em campo? Tem alguma ideia ai?",
    infos: [
      {
        title: "Definindo nossas ações",
        description: `<p>Uma ação é o que o agente executa no ambiente, sendo assim podemos elencar o que nosso agente pode 
        realizar:</p></br>

        <ul>
          <li>Ação 1 > Chute - o agente executa um chute em direção ao gol adversário;</li>
          <li>Ação 2 > Lançamento - é feito um lançamento de bola em direção a área de ataque;</li>
          <li>Ação 3 > Passe 1 - é realizado um passe do tipo 1 para outro agente do mesmo time;</li>
          <li>Ação 4 > Passe 2 - é realizado um passe do tipo 2 para outro agente do mesmo time;</li>
          <li>Ação 5 > Drible 1 - o agente executa um drible do tipo 1;</li>
          <li>Ação 6 > Drible 2 - o agente executa um drible do tipo 2.</li>
        </ul></br>

        <p>Assim, totalizam 6 ações que o nosso agente pode executar e vamos considerar também que nosso ambiente possui 15 estados. 
        Dessa maneira, podemos construir uma função que vai escolher uma ação para ser executada em cada estado do ambiente, 
        consultado a tabela de aprendizado Q, conforme discutido anteriormente.</p></br>
        
        <p>Dessa maneira, podemos então construir uma rotina que vai retornar a melhor ação a ser realizada para um estado:</p>
        `,
        code: snippets["definir_acao_1"],
        language: "c",
      },
      {
        title: "Ações aleatórias",
        description: `<p>Contudo, precisamos pensar no seguinte cenário:</p></br>

        <ul>
          <li>1: Suponha que a ação 1 seja a melhor a ser executada no estado 14;</li>
          <li>2: Mas na primeira execução dela, o ambiente retorne uma recompensa com valor menor com relação às demais ações;</li>
          <li>3: Então, a ação 1 não seria mais escolhida, para esse estado;</li>
          <li>4: Podemos concluir que somente escolher uma ação pelo maior valor de uma linha da tabela durante o aprendizado, pode 
          ser um processo muito tendencioso.</li>
        </ul></br>

        <p>Para contornar problemas como esse, podemos então escolher aleatoriamente as ações a serem executadas em algumas jogadas, 
        isso é muito importante para fazer com que nossa tabela seja bem estimada, ou seja, todas as ações serão bem testadas, a ponto
        de aprendizado definir qual ação realmente se demonstrou mais alinhada com o objetivo geral.</p></br>

        <p>Sendo assim, podemos incluir o parâmetro 'e_greedy' em nosso código, ele vai ser responsável em decidir quando uma ação 
        deve ser escolhida aleatoriamente ou com base na tabela Q. Se o seu valor for 0.1, por exemplo, significa que a cada 100 jogadas, 
        10 serão aleatórias.</p></br>
        `,
        code: snippets["definir_acao_2"],
        language: "c",
      },
      {
        description: `<p>Para melhorar o entendimento, vamos observar esse fluxograma:</p></br>
        `,
      },
      {
        image: p41,
      },
    ],
  },
  {
    page: 4,
    message: "Essa parte agora é muito importante! Fica ligado.",
    infos: [
      {
        title: "Atualizando a Tabela de Aprendizado",
        description: `<p>Já vimos que a tabela Q é responsável por armazenar os valores, que representam uma espécie de 
        pontuação para cada ação dentro dos estados. Mas você já se perguntou como esses valores são atualizados?</p></br>
        
        <p>Como também vimos anteriormente, após realizar cada ação o agente vai receber de retorno uma recompensa e existem 
        diversas maneiras de utilizar esse valor para atualizar a nossa tabela. Aqui vamos utilizar a equação do algoritmo 
        Q_Learning:</p></br>`,
      },
      {
        image: p51,
      },
      {
        description: `<p>Em posse dessa equação podemos montar o método responsável por essa ação:</p></br>`,
      },
      {
        code: snippets["q_learning"],
        language: "c",
      },
    ],
  },
  {
    page: 5,
    message: `Isso é tudo pessoal haha. Até aqui já vimos todas as rotinas individuais, então agora é só juntar todos esses passos e executá-los na 
    ordem certa durante um episódio, até que o aprendizado aconteça. Esse resumo final deixa bem claro o fluxo de implementação 
    que devemos sempre seguir. Até mais galera!!`,
    infos: [
      {
        image: p61,
      },
    ],
  },
];

export default pages;
