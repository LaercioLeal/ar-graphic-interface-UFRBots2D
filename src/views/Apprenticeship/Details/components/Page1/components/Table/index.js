import React, { useState, useMemo, useLayoutEffect, useCallback } from "react";
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

export default function Table({ data }) {
  const [tableData, setTableData] = useState([]);
  const [type, setType] = useState("sum");

  const showChangeData = useMemo(() => {
    return window.innerWidth < 1600;
  }, []);

  const handleRowExpansion = useCallback(
    (expanded, row) => {
      const index = data.indexOf(row);
      const rowElement = document.querySelector(`#row-${index + 1}`);

      if (!rowElement) return;

      if (expanded) {
        rowElement.classList.add("expanded");
      } else {
        rowElement.classList.remove("expanded");
      }
    },
    [data]
  );

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
        highlightOnHover
        pointerOnHover
        subHeader={data.length > 0}
        expandableRows
        expandOnRowClicked
        expandableRowExpanded={(row) => row.defaultExpanded}
        subHeaderComponent={
          <Heading
            data={data}
            setType={setType}
            type={type}
            showChangeData={showChangeData}
          />
        }
        expandableRowsComponent={({ data }) => <div />}
        sortIcon={<Icons.ArrowDownwardOutlined style={{ marginLeft: 4 }} />}
        onRowExpandToggled={handleRowExpansion}
      />
    </S.Container>
  );
}
