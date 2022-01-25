import React from "react";

export default function Page1({ data, havingData }) {
  return <div>{havingData ? "Page 1" : "Sem dados para exibir"}</div>;
}
