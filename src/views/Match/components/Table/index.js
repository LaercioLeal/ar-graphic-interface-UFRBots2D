import React, { useState, useMemo, useLayoutEffect } from "react";
import * as Icons from "@material-ui/icons";
import DataTable from "react-data-table-component";

import * as S from "./styles";
import { Empty, Heading } from "./components";
import { Button } from "components";
import { Status } from "./functions";

const paginationOptions = {
  rowsPerPageText: "Linhas por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

export default function Table({ data, runAll, handleAdd }) {
  const [tableData, setTableData] = useState([]);

  const tableColumns = [
    {
      name: "Status",
      selector: ({ status }) => status,
      sortable: true,
      cell: (row) => {
        return (
          <S.Status status={row.status}>{Status[row.status].title}</S.Status>
        );
      },
    },
    {
      name: "Time 1",
      selector: ({ team1 }) => team1.name,
      sortable: true,
    },
    {
      name: "Placar Time 1",
      cell: ({ team1 }) => <h1>{team1.result}</h1>,
    },
    {
      name: "Time 2",
      selector: ({ team2 }) => team2.name,
      sortable: true,
    },
    {
      name: "Placar Time 1",
      cell: ({ team2 }) => <h1>{team2.result}</h1>,
    },
    {
      name: "Modo",
      selector: ({ mode }) => mode,
      cell: ({ mode }) => (
        <S.Status status={mode === 0 ? "running" : "done"}>
          {mode === 0 ? "Rápido" : "Normal"}
        </S.Status>
      ),
      sortable: true,
    },
    {
      cell: (row) => (
        <S.Buttons>
          <Button
            color="blue"
            isDisabled={["queue", "running"].includes(row.status)}
            onClick={() => {}}
          >
            <Icons.PlayArrowOutlined />
          </Button>
          <Button color="red" onClick={() => {}}>
            <Icons.DeleteForeverOutlined />
          </Button>
        </S.Buttons>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
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
            handleAdd={handleAdd}
            data={data}
            canRunAll={data.filter((item) => item.status === "wait").length > 0}
            runAll={runAll}
          />
        }
        noDataComponent={<Empty />}
        sortIcon={<Icons.ArrowDownwardOutlined style={{ marginLeft: 4 }} />}
      />
    </S.Container>
  );
}
