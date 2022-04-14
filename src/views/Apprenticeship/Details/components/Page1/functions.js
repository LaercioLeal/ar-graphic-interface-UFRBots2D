export async function downloadResults() {
  return true;
}

export function parserResumeCombination(trainings) {
  let gf = { index: "Gols Feitos" },
    gs = { index: "Gols Sofridos" },
    sg = { index: "Saldo de Gols" },
    key,
    keys = [];
  for (const training of trainings) {
    key = `Combinação ${training.combinacao}`;
    gf[key] = training.avg.gf;
    gs[key] = training.avg.gs;
    sg[key] = training.avg.sg;
    keys.push(key);
  }
  return { data: [{ ...gf }, { ...gs }, { ...sg }], keys };
}
