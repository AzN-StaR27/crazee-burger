import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array";

export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);

  //comportement
  const handleAdd = (newProduct) => {
    const menuCopy = deepClone(menu);

    const menuUpdated = [newProduct, ...menuCopy];

    setMenu(menuUpdated);
  };

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

  return { menu, setMenu, handleAdd, handleEdit, handleDelete, resetMenu };
};
