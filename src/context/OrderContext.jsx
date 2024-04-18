import { createContext } from "react";

export default createContext({
  username: "",
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  isCollapsed: false,
  setIsCollapsed: () => {},
  isAddSelected: false,
  setIsAddSelected: () => {},
  isEditSelected: false,
  setIsEditSelected: () => {},
  currentTabSelected: "",
  setCurrentTabSelected: () => {},
  menu: [],
  handleAdd: () => {},
  handleEdit: () => {},
  handleDelete: () => {},
  resetMenu: () => {},

  newProduct: {},
  setNewProduct: () => {},

  productSelected: {},
  setProductSelected: () => {},
  handleProductSelected: () => {},

  titleEditRef: {},

  basket: [],
  handleAddToBasket: () => {},
  handleDeleteBasketProduct: () => {},
});
