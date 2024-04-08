import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main.jsx";
import { theme } from "../../../theme";
import OrderContext from "../../../context/OrderContext.jsx";
import React, { useRef, useState } from "react";
import { EMPTY_PRODUCT } from "../../../enums/product.jsx";
import { useMenu } from "../../../hooks/useMenu.jsx";
export default function OrderPage() {
  //state

  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  //collapse pour onglet réduit
  const [isAddSelected, setIsAddSelected] = useState(false);
  const [isEditSelected, setIsEditSelected] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();
  const { menu, handleAdd, handleDelete, handleEdit, resetMenu } = useMenu();

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAdd,
    handleDelete,
    resetMenu,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    handleEdit,
    titleEditRef,
  };
  //On a pas besoin d'écrire isModeAdmin: isModeAdmin quand les "noms" sont les mêmes

  //affichage
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
