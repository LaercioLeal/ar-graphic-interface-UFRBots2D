let xlsx = require("json-as-xlsx");

export async function downloadResults(results, resume) {
  let content = [],
    first = true,
    vitorias = 0,
    derrotas = 0,
    empates = 0;
  for (const data of results) {
    vitorias += data.sg > 0 ? 1 : 0;
    derrotas += data.sg < 0 ? 1 : 0;
    empates += data.sg === 0 ? 1 : 0;
    if (first) {
      first = false;
      content.push({
        experiment: data.experiment.title,
        gf: data.gf,
        gs: data.gs,
        sg: data.sg,
      });
    } else {
      content.push({ gf: data.gf, gs: data.gs, sg: data.sg });
    }
  }
  content = content.map((item) => {
    if (!!item?.experiment)
      return {
        ...item,
        vitorias,
        derrotas,
        empates,
        totalgolsfeitos: resume.gf,
        totalgolsofridos: resume.gs,
        totalsaldogols: resume.sg,
      };
    return item;
  });
  let dados = [
    {
      sheet: `ARbot - Training Results`,
      columns: [
        { label: "Nome do Experimento", value: "experiment" },
        { label: "Gols Feitos", value: "gf" },
        { label: "Gols Sofridos", value: "gs" },
        { label: "Saldo de Gols", value: "sg" },
        { label: "Número de Vitórias", value: "vitorias" },
        { label: "Número de Derrotas", value: "derrotas" },
        { label: "Número de Empates", value: "empates" },
        { label: "Total de Gols Feitos", value: "totalgolsfeitos" },
        { label: "Total de Gols Sofridos", value: "totalgolsofridos" },
        { label: "Total de Saldo de Gols", value: "totalsaldogols" },
      ],
      content,
    },
  ];

  xlsx(dados, {
    fileName: `${
      content[0].experiment
    } - Training - at ${new Date().toDateString()}`,
    extraLength: 3,
    writeOptions: {},
  });
  return true;
}
