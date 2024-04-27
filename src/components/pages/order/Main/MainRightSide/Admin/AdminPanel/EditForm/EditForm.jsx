import React, { useContext, useState } from "react";
import OrderContext from "../../../../../../../../context/OrderContext.jsx";
import EditInfoMessage from "./EditInfoMessage.jsx";
import Form from "../Form/Form.jsx";
import SavingMessage from "./SavingMessage.jsx";
import { useSuccessMessage } from "../../../../../../../../hooks/useSuccessMessage.jsx";

export default function EditForm() {
  //state
  const {
    username,
    productSelected,
    setProductSelected,
    handleEdit,
    titleEditRef,
  } = useContext(OrderContext);

  const [valueOnFocus, setValueOnFocus] = useState();
  const { isSubmitted: isSaved, displaySubmitMessage } = useSuccessMessage();

  //comportements
  const handleChange = (event) => {
    const { name, value } = event.target;

    const productBeingEdited = { ...productSelected, [name]: value };

    setProductSelected(productBeingEdited); //cette ligne update le form
    handleEdit(productBeingEdited, username); //cette ligne update le menu
  };

  const handleOnFocus = (event) => {
    const inputValueOnFocus = event.target.value;
    setValueOnFocus(inputValueOnFocus);
  };

  const handleOnBlur = (event) => {
    const valueOnBlur = event.target.value;
    if (valueOnFocus !== valueOnBlur) {
      displaySubmitMessage();
    }
  };

  //affichage
  return (
    <Form
      product={productSelected}
      onChange={handleChange}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      ref={titleEditRef}
    >
      {isSaved ? <SavingMessage /> : <EditInfoMessage />}
    </Form>
  );
}
