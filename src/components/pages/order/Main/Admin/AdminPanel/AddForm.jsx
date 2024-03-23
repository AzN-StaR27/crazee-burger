import React, { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";

const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
};

export default function AddForm() {
  const { handleAdd } = useContext(OrderContext);

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };
    handleAdd(newProductToAdd);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">Aucune image</div>
      <div className="input-fields">
        <input
          name="title"
          value={newProduct.title}
          onChange={handleChange}
          type="text"
          placeholder="Nom"
        />
        <input
          name="imageSource"
          value={newProduct.imageSource}
          onChange={handleChange}
          type="text"
          placeholder="Image URL"
        />
        <input
          name="price"
          value={newProduct.price ? newProduct.price : ""}
          onChange={handleChange}
          type="text"
          placeholder="Prix"
        />
      </div>
      <button className="submit-button">Submit button</button>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  border: 2px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr); // == 1fr 1fr 1fr 1fr
  height: 100%;
  width: 70%;

  .image-preview {
    background: red;
    grid-area: 1 / 1 / 4 / 2; //correspond aux coordonnées de la grille -> faire inspecter sur navigateur
  }
  .input-fields {
    background: blue;
    grid-area: 1 / 2 / 4 / 3;
    display: grid;
  }
  .submit-button {
    background: green;
    grid-area: 4 / 2 / 5 / 3;
    width: 50%;
  }
`;
