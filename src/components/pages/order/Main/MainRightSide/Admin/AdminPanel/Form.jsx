import React from "react";
import styled from "styled-components";
import TextInput from "../../../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";
import { getInputTextsConfig } from "./inputTextConfig";

const Form = React.forwardRef(
  ({ product, onSubmit, onChange, onFocus, onBlur, children }, ref) => {
    // state (vide)

    // comportements (vide)

    const inputTexts = getInputTextsConfig(product);

    // affichage
    return (
      <FormStyled onSubmit={onSubmit}>
        <ImagePreview imageSource={product.imageSource} title={product.title} />
        <div className="input-fields">
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
          <select name="isAvailable" className="is-available" id="3">
            <option value={true}>En stock</option>
            <option value={false}>En rupture</option>
          </select>
          <select name="isPublicised" className="is-publicised" id="4">
            <option value={true}>Sans pub</option>
            <option value={false}>Avec pub</option>
          </select>
        </div>
        <div className="form-footer">{children}</div>
      </FormStyled>
    );
  }
);

export default Form;

const FormStyled = styled.form`
  /* border: 2px solid black; */
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
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
      background-color: red;
      grid-area: 3/1/4/2;
    }

    .is-available {
      background: pink;
    }
    .is-publicised {
      background: yellow;
    }
  }

  .form-footer {
    /* background: green; */
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
  }
`;
