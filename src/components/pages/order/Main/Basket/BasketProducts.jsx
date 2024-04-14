import React, { useContext } from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard";
import { IMAGE_COMING_SOON } from "../../../../../enums/product";
import { findObjectById } from "../../../../../utils/array";
import OrderContext from "../../../../../context/OrderContext.jsx";
import { checkIfProductIsClicked } from "../MainRightSide/Menu/helper.jsx";

export default function BasketProducts() {
  const {
    basket,
    isModeAdmin,
    handleDeleteBasketProduct,
    menu,
    handleProductSelected,
    productSelected,
  } = useContext(OrderContext);

  const handleOnDelete = (event, id) => {
    event.stopPropagation();
    handleDeleteBasketProduct(id);
  };

  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => {
        const menuProduct = findObjectById(basketProduct.id, menu);
        return (
          <div className="basket-card" key={basketProduct.id}>
            <BasketCard
              {...menuProduct}
              imageSource={
                menuProduct.imageSource
                  ? menuProduct.imageSource
                  : IMAGE_COMING_SOON
              }
              quantity={basketProduct.quantity}
              onDelete={(event) => handleOnDelete(event, basketProduct.id)}
              isClickable={isModeAdmin}
              onClick={
                isModeAdmin
                  ? () => handleProductSelected(basketProduct.id)
                  : null
              }
              isSelected={checkIfProductIsClicked(
                basketProduct.id,
                productSelected.id
              )}
            />
          </div>
        );
      })}
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.div`
  /* border: 1px solid red; */
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  .basket-card {
    margin: 10px 16px;
  }
  &.basket-card {
    /* border: 1px solid blue; */
    height: 86px;
    box-sizing: border-box;
    :first-child {
      margin-top: 20px;
      /* border: 1px solid red; */
    }
    :last-child {
      margin-bottom: 20px;
    }
  }
`;
