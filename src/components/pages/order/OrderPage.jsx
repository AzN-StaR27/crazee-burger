import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main.jsx";
import { theme } from "../../../theme";
import OrderContext from "../../../context/OrderContext.jsx";
import { useState } from "react";
import { fakeMenu } from "../../../fakeData/fakeMenu.js";
import { EMPTY_PRODUCT } from "../../../enums/product.jsx";
import { deepClone } from "../../../utils/array.jsx";
export default function OrderPage() {
  //state

  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  //collapse pour onglet réduit
  const [isAddSelected, setIsAddSelected] = useState(false);
  const [isEditSelected, setIsEditSelected] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("edit");
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);

  const handleAdd = (newProduct) => {
    const menuCopy = deepClone(menu);

    const menuUpdated = [newProduct, ...menuCopy];

    setMenu(menuUpdated);
  };

  //comportement

  const handleDelete = (idOfProductToDelete) => {
    const menuCopy = [...menu];

    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete
    );
    console.log("menu updated : ", menuUpdated);

    setMenu(menuUpdated);
  };

  const handleEdit = (productBeingEdited) => {
    //1. copie du state (deep clone)
    const menuCopy = deepClone(menu);

    //2. manip de la copie du state
    const productIndex = menu.findIndex(
      (menuProduct) => menuProduct.id === productBeingEdited.id
    );
    menuCopy[productIndex] = productBeingEdited;

    //3. update du state
    setMenu(menuCopy);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.SMALL);
  };

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
