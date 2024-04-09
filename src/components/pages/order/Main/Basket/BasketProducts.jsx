import React from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard";
import { IMAGE_COMING_SOON } from "../../../../../enums/product";

export default function BasketProducts({ basket }) {
  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => (
        <div className="basket-card" key={basketProduct.id}>
          <BasketCard
            {...basketProduct}
            imageSource={
              basketProduct.imageSource
                ? basketProduct.imageSource
                : IMAGE_COMING_SOON
            }
          />
        </div>
      ))}
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
