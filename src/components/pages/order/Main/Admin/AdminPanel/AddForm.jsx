import React, { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";

export default function AddForm() {
  const { handleAdd } = useContext(OrderContext);

  const [title, setTitle] = useState("Nouveau Burger");
  const [imageSource, setImageSource] = useState("");
  const [price, setPrice] = useState(0);

  // const newProduct = {
  //   id: new Date().getTime(),
  //   title: "nouveau produit",
  //   imageSource: "../../../../../public/images/burger1.png",
  //   price: 2.5,
  // };

  const newProduct = {
    title,
    imageSource,
    price,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAdd(newProduct);
  };

  const handleTitleChange = (event) => {
    console.log("event.target.value :", event.target.value);
    setTitle(event.target.value);
  };
  const handleImageChange = (event) => {
    console.log("event.target.value :", event.target.value);
    setImageSource(event.target.value);
  };
  const handlePriceChange = (event) => {
    console.log("event.target.value :", event.target.value);
    setPrice(event.target.value);
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">Aucune image</div>
      <div className="input-fields">
        <input
          value={title}
          onChange={handleTitleChange}
          type="text"
          placeholder="Nom"
        />
        <input
          value={imageSource}
          onChange={handleImageChange}
          type="text"
          placeholder="Image URL"
        />
        <input
          value={price}
          onChange={handlePriceChange}
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
