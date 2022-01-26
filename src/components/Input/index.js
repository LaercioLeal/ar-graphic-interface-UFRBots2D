import React from "react";

import { Container, InputContainer } from "./styles";

export default function Input({
  label,
  placeholder,
  value,
  onChange,
  disabled,
  props,
}) {
  return (
    <Container>
      {label && <label>{label}</label>}
      <InputContainer
        {...props}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
    </Container>
  );
}
