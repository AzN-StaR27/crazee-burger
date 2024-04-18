import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import {
  deepClone,
  removeObjectById,
  findObjectById,
  findIndexById,
} from "../utils/array";
import { setLocalStorage } from "../utils/window";

export const useBasket = () => {
  const [basket, setBasket] = useState([]);

  const handleAddToBasket = (productToAdd, username) => {
    const basketCopy = deepClone(basket);
    const productAlreadyInBasket = findObjectById(productToAdd.id, basketCopy);

    if (productAlreadyInBasket) {
      incrementProductAlreadyInBasket(productToAdd.id, basketCopy, username);
      return;
    }

    createNewBasketProduct(productToAdd.id, basketCopy, username);
  };

  // const handleAddToBasket = (productToAdd) => {
  //   const basketCopy = deepClone(basket);

  //   const isProductAlreadyInBasket =
  //     findObjectById(productToAdd.id, basketCopy) !== undefined;
  //   //1er cas : le produit n'est pas déjà dans le basket
  //   if (!isProductAlreadyInBasket) {
  //     createNewProductInBasket(productToAdd, basketCopy);
  //     return;
  //   }
  //   //2e cas : le produit est déjà dans le basket
  //   incrementProductAlreadyInBasket(productToAdd, basketCopy);
  // };

  const incrementProductAlreadyInBasket = (
    idProductToAdd,
    basketCopy,
    username
  ) => {
    const indexOfBasketProductToIncrement = findIndexById(
      idProductToAdd,
      basketCopy
    );
    basketCopy[indexOfBasketProductToIncrement].quantity += 1;
    setBasket(basketCopy);
    setLocalStorage(username, basketCopy);
  };
  const createNewBasketProduct = (idProductToAdd, basketCopy, username) => {
    //we do not re-create a whole product, we only add the extra info a basket
    const newBasketProduct = {
      id: idProductToAdd,
      quantity: 1,
    };
    const newBasket = [newBasketProduct, ...basketCopy];
    setBasket(newBasket);
    setLocalStorage(username, newBasket);
  };

  const handleDeleteBasketProduct = (idBasketProduct) => {
    const basketUpdated = removeObjectById(idBasketProduct, basket);
    setBasket(basketUpdated);
  };
  return { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct };
};
