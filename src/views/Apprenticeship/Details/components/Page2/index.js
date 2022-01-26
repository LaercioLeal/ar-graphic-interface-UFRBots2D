import React from "react";
import { Table } from "./components";

import * as S from "./styles";

export default function Page2({ data, havingData }) {
  return (
    <S.Container>
      <Table
        data={data}
        isLoading={false}
        // handleDeleteExperiment={handleDeleteExperiment}
        // handleAddExperiment={handleAddExperiment}
        // handleUpdateExperiment={handleUpdateExperiment}
      />
    </S.Container>
  );
}
