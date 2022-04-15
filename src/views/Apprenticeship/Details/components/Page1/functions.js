let xlsx = require("json-as-xlsx");

export function getKey(combinacao) {
  return `Comb ${combinacao}`;
}

export async function downloadResults(experiment, dados) {
  let content = [],
    first = true;
  for (const data of dados) {
    if (first) {
      first = false;
      content.push({
        experiment: experiment.title,
        combinacao: data.combinacao,
        alpha: data.alpha,
        gamma: data.gamma,
        epsilon: data.epsilon,
        sumgf: data.sum.gf,
        sumgs: data.sum.gs,
        sumsg: data.sum.sg,
        avggf: data.avg.gf,
        avggs: data.avg.gs,
        avgsg: data.avg.sg,
      });
    } else {
      content.push({
        combinacao: data.combinacao,
        alpha: data.alpha,
        gamma: data.gamma,
        epsilon: data.epsilon,
        sumgf: data.sum.gf,
        sumgs: data.sum.gs,
        sumsg: data.sum.sg,
        avggf: data.avg.gf,
        avggs: data.avg.gs,
        avgsg: data.avg.sg,
      });
    }
  }
  let doc = [
    {
      sheet: `ARbot - Experiment Resume`,
      columns: [
        { label: "Nome do Experimento", value: "experiment" },
        { label: "Combinação", value: "combinacao" },
        { label: "Alpha", value: "alpha" },
        { label: "Gamma", value: "gamma" },
        { label: "Epsilon", value: "epsilon" },
        { label: "Soma GF", value: "sumgf" },
        { label: "Soma GS", value: "sumgs" },
        { label: "Soma SG", value: "sumsg" },
        { label: "Média GF", value: "avggf" },
        { label: "Média GS", value: "avggs" },
        { label: "Média SG", value: "avgsg" },
      ],
      content,
    },
  ];

  xlsx(doc, {
    fileName: `${experiment.title} - Resume - at ${new Date().toDateString()}`,
    extraLength: 3,
    writeOptions: {},
  });
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
