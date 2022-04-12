import React, { useState, useMemo, useLayoutEffect } from "react";
import * as Icons from "@material-ui/icons";
import DataTable from "react-data-table-component";

import { downloadResults, sortDate, Status } from "./functions";
import * as S from "./styles";
import { Empty, Heading } from "./components";
import { Button } from "components";
import { useSnackbar } from "notistack";

const paginationOptions = {
  rowsPerPageText: "Linhas por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

const infoTooltip = {
  running: "Ver ensaio",
  wait: "",
  done: "",
  queue: "Aguarde...",
};

export default function Table({
  data,
  runAll,
  handleAdd,
  handleRemove,
  setSelectedToExecute,
}) {
  const { enqueueSnackbar } = useSnackbar();
  const [tableData, setTableData] = useState([]);
  // const [downloadDate, setDownloadDate] = useState();

  const getData = async (data) => {
    const res = await downloadResults(data);
    if (!res)
      enqueueSnackbar("Verifique sua conexão com a internet!", {
        variant: "error",
      });
    else enqueueSnackbar("Dados coletados!", { variant: "success" });
  };

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
      name: "Episódios",
      selector: ({ episodes }) => episodes,
      sortable: true,
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
          {["wait", "done"].includes(row.status) && (
            <>
              {row.status !== "done" ? (
                <Button
                  color="success"
                  tooltip={infoTooltip[row.status]}
                  onClick={() => setSelectedToExecute(row)}
                >
                  <Icons.PlayArrowOutlined />
                </Button>
              ) : (
                <Button color="blue" onClick={() => getData(row)}>
                  <Icons.CloudDownloadOutlined />
                </Button>
              )}
              <Button
                color="red"
                tooltip={infoTooltip["done"]}
                onClick={() => handleRemove(row.id)}
              >
                <Icons.DeleteForeverOutlined />
              </Button>
            </>
          )}
          {["running"].includes(row.status) && (
            <Button
              color="blue"
              tooltip={infoTooltip[row.status]}
              onClick={() => setSelectedToExecute(row)}
            >
              <Icons.SportsSoccerOutlined />
            </Button>
          )}
          {["queue"].includes(row.status) && (
            <Button tooltip={infoTooltip[row.status]} isDisabled>
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
      {/* {!!downloadDate ? (
        <JsonToExcel
          title="Download as Excel"
          data={downloadDate}
          fileName="sample-file"
          btnClassName="custom-classname"
        />
      ) : (
        <JsonToExcel
          title="Download as Excel"
          data={[{ test: "test" }]}
          fileName="sample-file"
          btnClassName="custom-classname"
        />
      )} */}

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
