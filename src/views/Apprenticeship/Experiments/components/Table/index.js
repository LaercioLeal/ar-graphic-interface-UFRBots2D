import React, { useState, useMemo, useCallback, useLayoutEffect } from "react";
import ArrowDownwardOutlined from "@material-ui/icons/ArrowDownwardOutlined";
import DataTable from "react-data-table-component";

import { sortDate } from "./functions";
import * as S from "./styles";
import NoExperiments from "../NoExperiments";
import { Form, Heading, Loader } from "./components";
import { Button } from "components";
import routes from "constants/routes";

const paginationOptions = {
  rowsPerPageText: "Linhas por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

export default function Table({
  data,
  isLoading,
  handleAddExperiment,
  handleDeleteExperiment,
  handleUpdateExperiment,
}) {
  const [tableData, setTableData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isCreatingNewExperiment, setIsCreatingNewExperiment] = useState(false);

  const tableColumns = [
    {
      name: "Título",
      selector: ({ title }) => title,
      sortable: true,
      grow: 1.5,
    },
    {
      name: "Ensaios",
      selector: ({ total }) => total,
      sortable: true,
    },
    {
      name: "Conclusão",
      selector: ({ done, total }) => `${total < 1 ? 0 : (done / total) * 100}%`,
      sortable: true,
      cell: ({ id, done, total }) => (
        <S.Legend>
          {total > 0 && (
            <>
              <S.Percentage>{`${((done / total) * 100).toFixed(
                0
              )}%`}</S.Percentage>
              <S.Progress>
                <S.Bar key={id} width={((done / total) * 100).toFixed(0)} />
                <S.BarOff key={id} width={((done / total) * 100).toFixed(0)} />
              </S.Progress>
            </>
          )}
        </S.Legend>
      ),
    },
    {
      name: "Data de Criação",
      selector: ({ createdAt }) => createdAt,
      sortable: true,
      sortFunction: (a, b) => sortDate(a, b, "createdAt"),
    },
    {
      cell: (row) => (
        <S.Link
          to={
            routes.apprenticeship.details +
            `?createdAt=${row.createdAt}&id=${row.id}&title=${row.title}`
          }
        >
          <Button onClick={() => {}}>Acessar</Button>
        </S.Link>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const handleCancel = useCallback(() => {
    setTableData(data);

    setIsCreatingNewExperiment(false);
  }, [data]);

  const handleFilter = useCallback((value) => {
    setSearchTerm(value);
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

      if (isCreatingNewExperiment) {
        handleCancel();
      }
    },
    [data, isCreatingNewExperiment, handleCancel]
  );

  useLayoutEffect(() => {
    setTableData(data);
  }, [data]);

  const filteredData = useMemo(() => {
    if (isCreatingNewExperiment) {
      setSearchTerm("");

      return tableData;
    }

    return tableData.filter((item) => {
      return (
        item?.title?.toLowerCase()?.includes(searchTerm.toLowerCase()) ||
        item?.createdAt?.includes(searchTerm)
      );
    });
  }, [searchTerm, tableData, isCreatingNewExperiment]);

  if (data.length === 0) return null;
  return (
    <S.Container>
      <DataTable
        key={isCreatingNewExperiment ? 1 : 0} // remount component
        columns={tableColumns}
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
        progressPending={isLoading}
        progressComponent={<Loader />}
        subHeaderComponent={
          <Heading
            handleAddExperiment={handleAddExperiment}
            disabledAddButton={isCreatingNewExperiment}
            onFilter={handleFilter}
          />
        }
        expandableRowsComponent={({ data }) => (
          <Form
            data={data}
            onUpdate={handleUpdateExperiment}
            onCancel={handleCancel}
            onDelete={handleDeleteExperiment}
            isLoading={isLoading}
          />
        )}
        noDataComponent={
          <NoExperiments
            data={data}
            isLoading={isLoading}
            handleAddExperiment={handleAddExperiment}
          />
        }
        sortIcon={<ArrowDownwardOutlined style={{ marginLeft: 4 }} />}
        onRowExpandToggled={handleRowExpansion}
      />
    </S.Container>
  );
}
