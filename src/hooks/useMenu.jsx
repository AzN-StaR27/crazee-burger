import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array";
import { findIndexById } from "../utils/array.jsx";
import { syncBothMenus } from "../api/product.jsx";
export const useMenu = () => {
  const [menu, setMenu] = useState();

  //comportement
  const handleAdd = (newProduct, username) => {
    const menuCopy = deepClone(menu);

    const menuUpdated = [newProduct, ...menuCopy];

    setMenu(menuUpdated);
    syncBothMenus(username, menuUpdated);
  };

  const handleDelete = (idOfProductToDelete, username) => {
    const menuCopy = deepClone(menu);

    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete
    );

    setMenu(menuUpdated);
    syncBothMenus(username, menuUpdated);
  };

  const handleEdit = (productBeingEdited, username) => {
    //1. copie du state (deep clone)
    const menuCopy = deepClone(menu);

    //2. manip de la copie du state
    const productIndex = findIndexById(productBeingEdited.id, menu);
    menuCopy[productIndex] = productBeingEdited;

    //3. update du state
    setMenu(menuCopy);
    syncBothMenus(username, menuCopy);
  };

  const resetMenu = (username) => {
    setMenu(fakeMenu.SMALL);
    syncBothMenus(username, fakeMenu.SMALL);
  };

  return { menu, setMenu, handleAdd, handleEdit, handleDelete, resetMenu };
};
