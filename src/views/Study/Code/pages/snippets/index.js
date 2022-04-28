const firstLine = "     ";

const snippets = {
  code1:
    firstLine +
    `int main() { 
      return 0;
    }`,
  definir_acao_1: `int definir_acao( int estadoAtual, float q[15][6])
      {
      int acao = 1;
      float maiorValor = q[estadoAtual][0];
      for (int i = 1; i < 6; i++)
      {
        if (q[estadoAtual][i] > maiorValor)
        {
          maiorValor = q[estadoAtual][i];
          acao = i;
        }
      }
      return acao;
    }`,
  definir_acao_2: `int definir_acao( int estadoAtual, float q[15][6])
    {
      int acao = 1, e_greedy = 0.1;

      if ((rand() % 100 + 1) / 100 < e_greedy)
      {
        // em 10% das vezes, essa condição será acessada
        return rand() % 6 + 1; // retorna ação aleatória
      }

      float maiorValor = q[estadoAtual][0];
      for (int i = 1; i < 6; i++)
      {
        if (q[estadoAtual][i] > maiorValor)
        {
          maiorValor = q[estadoAtual][i];
          acao = i;
        }
      }
      return acao;
    }`,
  q_learning: `void q_learning(
      int acao,
      int estado,
      float q[15][6],
      float r[2][5],
      float alpha,
      float gamma
  )
  {

    float max = getMax(estado); // pega maior valor dentro do estado

    float valor_atual = q[estado][acao];
    int reforco = valorRecompensa(estado);

    // Equação do Q_learning
    float novo_valor = valor_atual + alpha * (reforco + gamma * max - valor_atual);

    // atualização do valor de aprendizado na tabela
    q[estado][acao] = novo_valor;
  }`,
};

export { snippets };
