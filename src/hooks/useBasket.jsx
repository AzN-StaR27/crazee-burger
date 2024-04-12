import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import {
  deepClone,
  removeObjectById,
  findObjectById,
  findIndexById,
} from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (productToAdd) => {
    const basketCopy = deepClone(basket);
    const productAlreadyInBasket = findObjectById(productToAdd.id, basketCopy);

    if (productAlreadyInBasket) {
      incrementProductAlreadyInBasket(productToAdd.id, basketCopy);
      return;
    }

    createNewBasketProduct(productToAdd.id, basketCopy);
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

  const incrementProductAlreadyInBasket = (idProductToAdd, basketCopy) => {
    const indexOfBasketProductToIncrement = findIndexById(
      idProductToAdd,
      basketCopy
    );
    basketCopy[indexOfBasketProductToIncrement].quantity += 1;
    setBasket(basketCopy);
  };
  const createNewBasketProduct = (idProductToAdd, basketCopy) => {
    //we do not re-create a whole product, we only add the extra info a basket
    const newBasketProduct = {
      id: idProductToAdd,
      quantity: 1,
    };
    const newBasket = [newBasketProduct, ...basketCopy];
    setBasket(newBasket);
  };

  const handleDeleteBasketProduct = (idBasketProduct) => {
    //1. copy du state (optional because filter returns a new array)
    const basketCopy = deepClone(basket);

    //2. manip de la copie state
    const basketUpdated = removeObjectById(idBasketProduct, basketCopy);

    //3. update du state
    setBasket(basketUpdated);
  };
  return { basket, handleAddToBasket, handleDeleteBasketProduct };
};
