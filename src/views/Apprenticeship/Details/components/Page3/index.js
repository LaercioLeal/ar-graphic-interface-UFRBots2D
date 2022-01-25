import React from "react";

export default function Page3({ data, havingData }) {
  return <div>{havingData ? "Page 3" : "Sem dados para exibir"}</div>;
}
