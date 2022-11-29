import React from "react";
import { Table } from "./components";

import * as S from "./styles";

export default function Page2({
  data,
  done,
  runAll,
  handleAdd,
  handleRemove,
  setSelectedToSee,
  setSelectedToDetails,
}) {
  return (
    <S.Container>
      <Table
        data={data}
        done={done}
        runAll={runAll}
        isLoading={false}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
        setSelectedToSee={setSelectedToSee}
        setSelectedToDetails={setSelectedToDetails}
      />
    </S.Container>
  );
}
