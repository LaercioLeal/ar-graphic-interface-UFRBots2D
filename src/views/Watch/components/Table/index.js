import React, { useState, useMemo, useLayoutEffect } from "react";
import * as Icons from "@material-ui/icons";
import DataTable from "react-data-table-component";

import * as S from "./styles";
import { Heading } from "./components";
import { Button } from "components";

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
      name: "Time 1",
      selector: ({ time1 }) => time1,
      sortable: true,
    },
    {
      name: "Placar 1",
      selector: ({ placar1 }) => placar1,
      sortable: true,
    },
    {
      name: "Time 2",
      selector: ({ time2 }) => time2,
      sortable: true,
    },
    {
      name: "Placar 2",
      selector: ({ placar2 }) => placar2,
      sortable: true,
    },
    {
      cell: ({ path, file }) => (
        <S.Buttons>
          <Button color="blue" onClick={() => runLog(`.${path}/${file}`)}>
            <Icons.PlayArrowOutlined />
          </Button>
        </S.Buttons>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
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
        subHeaderComponent={<Heading />}
        sortIcon={<Icons.ArrowDownwardOutlined style={{ marginLeft: 4 }} />}
      />
    </S.Container>
  );
}
