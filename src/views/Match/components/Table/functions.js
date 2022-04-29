import themes from "Provider/themes";

export const Status = {
  wait: {
    title: "Aguardando",
    color: themes.colors.primary,
  },
  queue: {
    title: "Na Fila",
    color: themes.colors.gray,
  },
  running: {
    title: "Executando",
    color: themes.colors.blue,
  },
  done: {
    title: "Concluído",
    color: themes.colors.success,
  },
};
