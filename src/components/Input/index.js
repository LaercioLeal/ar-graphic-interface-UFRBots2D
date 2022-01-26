import React from "react";

import { Container, InputContainer } from "./styles";

export default function Input({
  label,
  error,
  placeholder,
  value,
  onChange,
  disabled,
  props,
  type,
}) {
  console.log(props);
  return (
    <Container>
      {label && <label>{label}</label>}
      <InputContainer
        {...props}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
      {error && <label className="error">{error}</label>}
    </Container>
  );
}
