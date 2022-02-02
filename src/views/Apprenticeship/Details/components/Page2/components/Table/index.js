import React, { useState, useMemo, useLayoutEffect } from "react";
import * as Icons from "@material-ui/icons";
import DataTable from "react-data-table-component";

import { sortDate, sortStatus, Status } from "./functions";
import * as S from "./styles";
import { Empty, Heading } from "./components";
import { Button } from "components";

const paginationOptions = {
  rowsPerPageText: "Linhas por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

export default function Table({
  data,
  handleAdd,
  handleRemove,
  setSelectedToExecute,
}) {
  const [tableData, setTableData] = useState([]);

  const tableColumns = [
    {
      name: "Status",
      selector: (a, b) => sortStatus(a, b, "status"),
      sortable: true,
      cell: (row) => {
        return (
          <S.Status status={row.status}>{Status[row.status].title}</S.Status>
        );
      },
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
      name: "Data de Criação",
      selector: ({ createdAt }) => createdAt,
      sortable: true,
      sortFunction: (a, b) => sortDate(a, b, "createdAt"),
    },
    {
      cell: (row) => (
        <S.Buttons>
          {(row.status === "wait" || row.status === "done") && (
            <>
              {row.status !== "done" && (
                <Button
                  color="success"
                  onClick={() => setSelectedToExecute(row)}
                >
                  <Icons.PlayArrowOutlined />
                </Button>
              )}
              <Button color="red" onClick={() => handleRemove(row.id)}>
                <Icons.DeleteForeverOutlined />
              </Button>
            </>
          )}
          {row.status === "running" && (
            <Button color="blue" onClick={() => setSelectedToExecute(row)}>
              <Icons.ArrowRightAltTwoTone />
            </Button>
          )}
          {row.status === "queue" && (
            <Button isDisabled>
              <Icons.WatchLaterOutlined />
            </Button>
          )}
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
            handleAdd={(values) => handleAdd(values)}
            hasData={data.length > 0}
          />
        }
        noDataComponent={<Empty />}
        sortIcon={<Icons.ArrowDownwardOutlined style={{ marginLeft: 4 }} />}
      />
    </S.Container>
  );
}
