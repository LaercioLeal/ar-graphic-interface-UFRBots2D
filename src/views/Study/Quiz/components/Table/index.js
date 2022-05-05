import React, { useState, useMemo, useLayoutEffect } from "react";
import * as Icons from "@material-ui/icons";
import DataTable from "react-data-table-component";

import * as S from "./styles";
import { Heading } from "./components";

const paginationOptions = {
  rowsPerPageText: "Linhas por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

export default function Table({ data, runLog }) {
  const [tableData, setTableData] = useState([]);

  const tableColumns = [
    {
      name: "Data",
      selector: ({ createdAt }) => createdAt,
      sortable: true,
    },
    {
      name: "Respostas corretas",
      selector: ({ correctQuestions }) => correctQuestions,
      sortable: true,
    },
    {
      name: "Respostas erradas",
      selector: ({ incorrectQuestions }) => incorrectQuestions,
      sortable: true,
    },
    {
      name: "Nota",
      selector: ({ totalScore }) => totalScore,
      sortable: true,
      cell: ({ totalScore }) => {
        return (
          <S.Note note={totalScore}>
            <p>{totalScore}</p>
          </S.Note>
        );
      },
    },
  ];

  useLayoutEffect(() => {
    setTableData(data);
  }, [data]);

  const filteredData = useMemo(() => {
    return tableData;
  }, [tableData]);

  return (
    <S.Container>
      <DataTable
        columns={tableColumns}
        data={filteredData}
        pagination
        dense
        paginationComponentOptions={paginationOptions}
        highlightOnHover
        pointerOnHover
        subHeader
        expandableRows={false}
        expandOnRowClicked={false}
        expandableRowExpanded={(row) => row.defaultExpanded}
        subHeaderComponent={
          <Heading
            title={data.length > 0 ? "Aqui são sua tentativas anteriores" : ""}
            sizeMB={data.map((item) => item.size).reduce((a, b) => a + b, 0)}
          />
        }
        sortIcon={<Icons.ArrowDownwardOutlined style={{ marginLeft: 4 }} />}
      />
    </S.Container>
  );
}
