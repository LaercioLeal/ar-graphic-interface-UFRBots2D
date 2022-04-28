const firstLine = "     ";

const snippets = {
  code1:
    firstLine +
    `int main() { 
      return 0;
    }`,
  definir_acao_1: `int Player::definir_acao( int estadoAtual, float q[15][6])
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
  definir_acao_2: `int Player::definir_acao( int estadoAtual, float q[15][6])
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
};

export { snippets };
