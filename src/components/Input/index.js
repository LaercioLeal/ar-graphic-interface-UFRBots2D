import React from "react";

import { InputContainer } from "./styles";

export default function Input({ placeholder, value, onChange, disabled }) {
  return (
    <InputContainer
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    />
  );
}
