import React, { useState, useMemo, useLayoutEffect } from "react";
import * as Icons from "@material-ui/icons";
import DataTable from "react-data-table-component";

import * as S from "./styles";
import { Heading } from "./components";
import { parserColumns } from "./parser";

const paginationOptions = {
  rowsPerPageText: "Linhas por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

export default function Table({ data, experiment }) {
  const [tableData, setTableData] = useState([]);
  const [type, setType] = useState("sum");

  const showChangeData = useMemo(() => {
    return window.innerWidth < 1600;
  }, []);

  useLayoutEffect(() => {
    setTableData(data);
  }, [data]);

  const filteredData = useMemo(() => {
    return tableData;
  }, [tableData]);

  return (
    <S.Container>
      <DataTable
        columns={parserColumns(type, showChangeData)}
        data={filteredData}
        pagination
        dense
        paginationComponentOptions={paginationOptions}
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
        highlightOnHover
        pointerOnHover
        subHeader
        subHeaderComponent={
          <Heading
            data={data}
            experiment={experiment}
            setType={setType}
            type={type}
            showChangeData={showChangeData}
          />
        }
        sortIcon={<Icons.ArrowDownwardOutlined style={{ marginLeft: 4 }} />}
      />
    </S.Container>
  );
}
