import React from "react";
import { Empty, Form, Table } from "./components";

import * as S from "./styles";

export default function Page2({ data, havingData }) {
  return (
    <S.Container>
      <Form />
      {!havingData ? (
        <Empty />
      ) : (
        <>
          <Table
            data={data}
            isLoading={false}
            // handleDeleteExperiment={handleDeleteExperiment}
            // handleAddExperiment={handleAddExperiment}
            // handleUpdateExperiment={handleUpdateExperiment}
          />
        </>
      )}
    </S.Container>
  );
}
