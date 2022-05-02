let xlsx = require("json-as-xlsx");

export async function downloadResults(dados) {
  let content = [];
  for (const data of dados) {
    content.push({
      team1: data.team1.name,
      result1: data.team1.score,
      divisor: "x",
      team2: data.team2.name,
      result2: data.team2.score,
    });
  }
  let doc = [
    {
      sheet: `ARbot - Experiment Resume`,
      columns: [
        { label: "Time 1", value: "team1" },
        { label: "Placar Time 1", value: "result1" },
        { label: "", value: "divisor" },
        { label: "Placar Time 2", value: "result2" },
        { label: "Time 2", value: "team2" },
      ],
      content,
    },
  ];

  xlsx(doc, {
    fileName: `Resultados - at ${new Date().toDateString()}`,
    extraLength: 3,
    writeOptions: {},
  });
  console.log(dados);
  return true;
}
