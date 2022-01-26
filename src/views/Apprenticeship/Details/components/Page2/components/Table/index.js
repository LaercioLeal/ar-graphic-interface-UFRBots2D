import React, { useState, useMemo, useLayoutEffect } from "react";
import ArrowDownwardOutlined from "@material-ui/icons/ArrowDownwardOutlined";
import DataTable from "react-data-table-component";

import { sortDate } from "./functions";
import * as S from "./styles";
import { Empty, Heading } from "./components";

const paginationOptions = {
  rowsPerPageText: "Linhas por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

export default function Table({ data, handleAdd }) {
  const [tableData, setTableData] = useState([]);

  const tableColumns = [
    {
      name: "Data de Criação",
      selector: ({ createdAt }) => createdAt,
      sortable: true,
      sortFunction: (a, b) => sortDate(a, b, "createdAt"),
      grow: 0.3,
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
        sortIcon={<ArrowDownwardOutlined style={{ marginLeft: 4 }} />}
      />
    </S.Container>
  );
}
