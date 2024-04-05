import React, { useContext, useRef } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import styled from "styled-components";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../../reusable-ui/TextInput";
import { getInputTextsConfig } from "./inputTextConfig";

export default function EditForm() {
  //state
  const { productSelected, setProductSelected, handleEdit, titleEditRef } =
    useContext(OrderContext);

  const inputTexts = getInputTextsConfig(productSelected);

  //comportements
  const handleChange = (event) => {
    const { name, value } = event.target;

    const productBeingEdited = { ...productSelected, [name]: value };

    setProductSelected(productBeingEdited); //cette ligne update le form
    handleEdit(productBeingEdited); //cette ligne update le menu
  };

  //affichage
  return (
    <EditFormStyled>
      <ImagePreview
        imageSource={productSelected.imageSource}
        title={productSelected.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            {...input}
            key={input.id}
            version="minimalist"
            onChange={handleChange}
            ref={input.name === "title" ? titleEditRef : null}
          />
        ))}
      </div>
    </EditFormStyled>
  );
}

const EditFormStyled = styled.form`
  /* border: 2px solid black; */
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr); // == 1fr 1fr 1fr 1fr
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    /* background: blue; */
    grid-area: 1 / 2 / 4 / 3;

    display: grid;
    grid-row-gap: 8px;
  }
  .submit {
    grid-area: 4 / 2 / 5 / 3;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;

    .submit-button {
      /* width: 50%; */
      height: 100%;
    }
  }
`;
