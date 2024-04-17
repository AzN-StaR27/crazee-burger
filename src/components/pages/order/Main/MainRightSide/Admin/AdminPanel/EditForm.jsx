import React, { useContext } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import EditInfoMessage from "./EditInfoMessage.jsx";
import Form from "./Form.jsx";

export default function EditForm() {
  //state
  const {
    username,
    productSelected,
    setProductSelected,
    handleEdit,
    titleEditRef,
  } = useContext(OrderContext);

  //comportements
  const handleChange = (event) => {
    const { name, value } = event.target;

    const productBeingEdited = { ...productSelected, [name]: value };

    setProductSelected(productBeingEdited); //cette ligne update le form
    handleEdit(productBeingEdited, username); //cette ligne update le menu
  };

  //affichage
  return (
    <Form product={productSelected} onChange={handleChange} ref={titleEditRef}>
      <EditInfoMessage />
    </Form>
  );
}
