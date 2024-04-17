import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array";
import { findIndexById } from "../utils/array.jsx";
import { syncBothMenus } from "../api/product.jsx";
export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);

  //comportement
  const handleAdd = (newProduct, username) => {
    const menuCopy = deepClone(menu);

    const menuUpdated = [newProduct, ...menuCopy];

    setMenu(menuUpdated);
    syncBothMenus(username, menuUpdated);
  };

  const handleDelete = (idOfProductToDelete) => {
    const menuCopy = deepClone(menu);

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
    const productIndex = findIndexById(productBeingEdited.id, menu);
    menuCopy[productIndex] = productBeingEdited;

    //3. update du state
    setMenu(menuCopy);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.SMALL);
  };

  return { menu, setMenu, handleAdd, handleEdit, handleDelete, resetMenu };
};
