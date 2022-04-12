import { getResults } from "services";

let xlsx = require("json-as-xlsx");

export async function downloadResults(data) {
  return await getResults({ idTraining: data.id })
    .then((results) => {
      let content = [],
        first = true,
        vitorias = 0,
        derrotas = 0,
        empates = 0;
      for (data of results.data) {
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
        if (!!item?.experiment) return { ...item, vitorias, derrotas, empates };
        return item;
      });
      let dados = [
        {
          sheet: `FUTar - Training Results`,
          columns: [
            { label: "Experimento", value: "experiment" },
            { label: "Gols Feitos", value: "gf" },
            { label: "Gols Sofridos", value: "gs" },
            { label: "Saldo de Gols", value: "sg" },
            { label: "Número de Vitórias", value: "vitorias" },
            { label: "Número de Derrotas", value: "derrotas" },
            { label: "Número de Empates", value: "empates" },
          ],
          content,
        },
      ];

      xlsx(dados, {
        fileName: `Training-${new Date().toDateString()}`,
        extraLength: 3,
        writeOptions: {},
      });
      return true;
    })
    .catch((_) => {
      return false;
    });
}
