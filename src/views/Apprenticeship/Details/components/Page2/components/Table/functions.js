import themes from "Provider/themes";

export function parseDateIso(date) {
  const day = Number(date.split("/")[0]);
  const month = Number(date.split("/")[1]);
  const year = Number(date.split("/")[2]);

  return new Date(`${year}/${month}/${day}`);
}

export function sortDate(rowA, rowB, column) {
  let a = rowA[column].toLowerCase();
  let b = rowB[column].toLowerCase();

  const dateStringRegex = /\d{2}\/\d{2}\/\d{4}/;
  const dateStringX = a.match(dateStringRegex);
  const dateStringY = b.match(dateStringRegex);

  if (dateStringX && dateStringY) {
    a = parseDateIso(dateStringX[0]);
    b = parseDateIso(dateStringY[0]);
  }

  if (a > b) {
    return 1;
  }

  if (b > a) {
    return -1;
  }

  return 0;
}

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

export function sortStatus(rowA, rowB, column) {
  let a = rowA[column].toLowerCase();
  let b = rowB[column].toLowerCase();

  const dateStringRegex = /\d{2}\/\d{2}\/\d{4}/;
  const dateStringX = a.match(dateStringRegex);
  const dateStringY = b.match(dateStringRegex);

  if (dateStringX && dateStringY) {
    a = parseDateIso(dateStringX[0]);
    b = parseDateIso(dateStringY[0]);
  }

  if (a > b) {
    return 1;
  }

  if (b > a) {
    return -1;
  }

  return 0;
}
