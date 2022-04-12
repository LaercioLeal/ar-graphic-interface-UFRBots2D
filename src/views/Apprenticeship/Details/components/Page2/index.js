import React from "react";
import { Table } from "./components";

import * as S from "./styles";

export default function Page2({
  data,
  runAll,
  handleAdd,
  handleRemove,
  setSelectedToExecute,
  setSelectedToDetails,
}) {
  return (
    <S.Container>
      <Table
        data={data}
        runAll={runAll}
        isLoading={false}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
        setSelectedToExecute={setSelectedToExecute}
        setSelectedToDetails={setSelectedToDetails}
      />
    </S.Container>
  );
}
