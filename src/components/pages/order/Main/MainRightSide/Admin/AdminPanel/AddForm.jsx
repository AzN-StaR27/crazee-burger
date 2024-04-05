import React, { useContext, useState } from "react";
import OrderContext from "../../../../../../../context/OrderContext.jsx";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product.jsx";
import Form from "./Form.jsx";

export default function AddForm() {
  //state
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  //comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };
    handleAdd(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);

    displaySubmitMessage();
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const displaySubmitMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      F;
    }, 2000);
  };

  return (
    <Form
      product={newProduct}
      onSubmit={handleSubmit}
      onChange={handleChange}
      isSubmitted={isSubmitted}
    />
  );
}
