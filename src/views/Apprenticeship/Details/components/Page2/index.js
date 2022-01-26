import React from "react";
import { Table } from "./components";

import * as S from "./styles";

export default function Page2({ data, handleAdd }) {
  return (
    <S.Container>
      <Table data={data} isLoading={false} handleAdd={handleAdd} />
    </S.Container>
  );
}
