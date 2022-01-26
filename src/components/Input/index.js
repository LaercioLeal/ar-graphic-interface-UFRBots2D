import React from "react";

import { Container, InputContainer } from "./styles";

export default function Input({
  label,
  error,
  placeholder,
  value,
  onChange,
  disabled,
  name,
  step,
  type,
  id,
  props,
}) {
  return (
    <Container>
      {label && <label>{label}</label>}
      <InputContainer
        {...props}
        id={id}
        name={name}
        step={step || "any"}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        hasError={!!error}
        data-mask="(00) 0000-0000"
        data-mask-selectonfocus="true"
      />
      {error && <label className="error">{error}</label>}
    </Container>
  );
}
