export function getKey(combinacao) {
  return `Comb ${combinacao}`;
}

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
    key = getKey(training.combinacao);
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
    key = getKey(training.combinacao);
    gf[key] = training.sum.gf;
    gs[key] = training.sum.gs;
    sg[key] = training.sum.sg;
    keys.push(key);
  }
  let data = [{ ...gf }, { ...gs }, { ...sg }];
  return { data, keys };
}

export function parserResume(trainings) {
  const inittial = trainings[0];
  let key,
    better = {
      gf: {
        title: "Melhor Resultado GF",
        value: inittial.sum.gf,
        comb: [],
      },
      gs: {
        title: "Melhor Resultado GS",
        value: inittial.sum.gs,
        comb: [],
      },
      sg: {
        value: inittial.sum.sg,
        title: "Melhor Resultado SG",
        comb: [],
      },
    };
  for (const training of trainings) {
    if (training.sum.gf > better.gf.value) {
      better.gf.value = training.sum.gf;
    }
    if (training.sum.gs < better.gs.value) {
      better.gs.value = training.sum.gs;
    }
    if (training.sum.sg > better.sg.value) {
      better.sg.value = training.sum.sg;
    }
  }
  for (const training of trainings) {
    key = getKey(training.combinacao);
    if (training.sum.gf === better.gf.value) {
      better.gf.comb.push(key);
    }
    if (training.sum.gs === better.gs.value) {
      better.gs.comb.push(key);
    }
    if (training.sum.sg === better.sg.value) {
      better.sg.comb.push(key);
    }
  }
  return [{ ...better.gf }, { ...better.gs }, { ...better.sg }];
}
