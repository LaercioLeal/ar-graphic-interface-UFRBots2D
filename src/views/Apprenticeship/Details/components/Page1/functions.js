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
    key = `Comb ${training.combinacao}`;
    gf[key] = training.avg.gf;
    gs[key] = training.avg.gs;
    sg[key] = training.avg.sg;
    keys.push(key);
  }
  let data = [{ ...gf }, { ...gs }, { ...sg }];
  return { data, keys };
}

export function parserResumeBar(trainings) {
  let gf = { index: "Gols Feitos" },
    gs = { index: "Gols Sofridos" },
    sg = { index: "Saldo de Gols" },
    key,
    keys = [];
  for (const training of trainings) {
    key = `Comb ${training.combinacao}`;
    gf[key] = training.sum.gf;
    gs[key] = training.sum.gs;
    sg[key] = training.sum.sg;
    keys.push(key);
  }
  let data = [{ ...gf }, { ...gs }, { ...sg }];
  return { data, keys };
}
