import React from "react";
import { Table } from "./components";

import * as S from "./styles";

export default function Page2({
  data,
  handleAdd,
  handleRemove,
  setSelectedToExecute,
}) {
  return (
    <S.Container>
      <Table
        data={data}
        isLoading={false}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
        setSelectedToExecute={setSelectedToExecute}
      />
    </S.Container>
  );
}
