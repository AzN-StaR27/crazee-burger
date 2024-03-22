import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import OrderContext from "../../../context/OrderContext.jsx";
import { useState } from "react";
import { fakeMenu } from "../../../fakeData/fakeMenu.js";

export default function OrderPage() {
  //state

  const [isModeAdmin, setIsModeAdmin] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  //collapse pour onglet réduit
  const [isAddSelected, setIsAddSelected] = useState(false);
  const [isEditSelected, setIsEditSelected] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);

  const handleAdd = (newProduct) => {
    const menuCopy = [...menu];

    const menuUpdated = [newProduct, ...menuCopy];

    setMenu(menuUpdated);
  };

  //comportement

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
