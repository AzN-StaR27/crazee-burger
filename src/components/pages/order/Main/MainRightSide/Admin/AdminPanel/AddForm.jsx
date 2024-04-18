import React, { useContext } from "react";
import OrderContext from "../../../../../../../context/OrderContext.jsx";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product.jsx";
import Form from "./Form.jsx";
import SubmitButton from "./SubmitButton.jsx";
import { useSuccessMessage } from "../../../../../../../hooks/useSuccessMessage.jsx";
import { replaceFrenchCommaWithDot } from "../../../../../../../utils/maths.jsx";

export default function AddForm() {
  //state
  const { handleAdd, newProduct, setNewProduct, username } =
    useContext(OrderContext);
  const { isSubmitted, displaySubmitMessage } = useSuccessMessage();

  //comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
      price: replaceFrenchCommaWithDot(newProduct.price),
    };
    handleAdd(newProductToAdd, username);
    setNewProduct(EMPTY_PRODUCT);

    displaySubmitMessage();
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  return (
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
      <SubmitButton isSubmitted={isSubmitted} />
    </Form>
  );
}
