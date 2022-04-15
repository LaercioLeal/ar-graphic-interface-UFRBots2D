import { getKey } from "../../functions";
import * as S from "./styles";

export function parserColumns(type, showChangeData) {
  let tableColumns = [
    {
      name: "",
      selector: ({ combinacao }) => combinacao,
      sortable: true,
      cell: ({ combinacao }) => {
        return <S.Status>{getKey(combinacao)}</S.Status>;
      },
      button: true,
    },
    {
      name: "Alpha",
      selector: ({ alpha }) => alpha,
      sortable: true,
    },
    {
      name: "Gamma",
      selector: ({ gamma }) => gamma,
      sortable: true,
    },
    {
      name: "Epsilon",
      selector: ({ epsilon }) => epsilon,
      sortable: true,
    },

    {
      name: `${type === "sum" ? "Soma" : "Média"} GF`,
      selector: ({ avg, sum }) => (type === "sum" ? sum.gf : avg.gf),
      sortable: true,
    },
    {
      name: `${type === "sum" ? "Soma" : "Média"} GS`,
      selector: ({ avg, sum }) => (type === "sum" ? sum.gs : avg.gs),
      sortable: true,
    },
    {
      name: `${type === "sum" ? "Soma" : "Média"} SG`,
      selector: ({ avg, sum }) => (type === "sum" ? sum.sg : avg.sg),
      sortable: true,
    },
  ];
  if (showChangeData) return tableColumns;
  tableColumns = [
    ...tableColumns,
    {
      name: "Média GF",
      selector: ({ avg }) => avg.gf,
      sortable: true,
    },
    {
      name: "Média GS",
      selector: ({ avg }) => avg.gs,
      sortable: true,
    },
    {
      name: "Média SG",
      selector: ({ avg }) => avg.sg,
      sortable: true,
    },
  ];
  return tableColumns;
}
