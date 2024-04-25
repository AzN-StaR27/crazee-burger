import React from "react";
import styled from "styled-components";

export default function SelectInput({
  value,
  options,
  name,
  className,
  id,
  onChange,
  onFocus,
  onBlur,
}) {
  return (
    <SelectInputStyled
      value={value}
      name={name}
      className={className}
      id={id}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {options.map(({ value, label }) => (
        <option key={label} value={value}>
          {label}
        </option>
      ))}
    </SelectInputStyled>
  );
}

const SelectInputStyled = styled.select`
  border: 1px solid red;
`;
