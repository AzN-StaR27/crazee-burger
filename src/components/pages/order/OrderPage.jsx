import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main.jsx";
import { theme } from "../../../theme";
import OrderContext from "../../../context/OrderContext.jsx";
import React, { useEffect, useRef, useState } from "react";
import { EMPTY_PRODUCT } from "../../../enums/product.jsx";
import { useMenu } from "../../../hooks/useMenu.jsx";
import { useBasket } from "../../../hooks/useBasket.jsx";
import { findObjectById } from "../../../utils/array.jsx";
import { useParams } from "react-router-dom";
import { getMenu } from "../../../api/product.jsx";
export default function OrderPage() {
  //state

  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  //collapse pour onglet réduit
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();
  const { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu } =
    useMenu();
  const { basket, handleAddToBasket, handleDeleteBasketProduct } = useBasket();
  const { username } = useParams();

  const handleProductSelected = async (idProductClicked) => {
    const productClickedOn = findObjectById(idProductClicked, menu);
    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    await setProductSelected(productClickedOn);
    titleEditRef.current.focus();
  };

  const initializeMenu = async () => {
    const menuReceived = await getMenu(username);
    console.log("menuReceived : ", menuReceived);
    setMenu(menuReceived);
  };

  useEffect(() => {
    initializeMenu();
  }, []);

  const orderContextValue = {
    username,
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
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
    basket,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleProductSelected,
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
