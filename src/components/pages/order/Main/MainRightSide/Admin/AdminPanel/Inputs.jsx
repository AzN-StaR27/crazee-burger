import React from "react";
import styled from "styled-components";
import { getInputTextsConfig, getSelectInputConfig } from "./inputConfig";
import TextInput from "../../../../../../reusable-ui/TextInput";
import SelectInput from "../../../../../../reusable-ui/SelectInput";

export const Inputs = React.forwardRef(
  ({ product, onChange, onFocus, onBlur }, ref) => {
    const inputTexts = getInputTextsConfig(product);
    const inputSelects = getSelectInputConfig(product);

    return (
      <InputsStyled>
        {inputTexts.map((input) => (
          <TextInput
            {...input}
            key={input.id}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            version="minimalist"
            ref={ref && input.name === "title" ? ref : null}
          />
        ))}
        {inputSelects.map((inputSelect) => (
          <SelectInput
            key={inputSelect.id}
            {...inputSelect}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        ))}
      </InputsStyled>
    );
  }
);

export default Inputs;

const InputsStyled = styled.div`
  /* background: blue; */
  grid-area: 1 / 2 / -2 / 3;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 8px;
  grid-column-gap: 8px;

  .title {
    grid-area: 1/1/2/4;
  }
  .image-source {
    grid-area: 2/1/3/4;
  }
  .price {
    grid-area: 3/1/4/2;
  }
`;
