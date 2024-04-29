import React, { useContext } from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard.jsx";
import {
  BASKET_MESSAGE,
  IMAGE_COMING_SOON,
} from "../../../../../../enums/product.jsx";
import { findObjectById } from "../../../../../../utils/array.jsx";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import { checkIfProductIsClicked } from "../../MainRightSide/Menu/helper.jsx";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { basketAnimation } from "../../../../../../theme/animations.jsx";
import { formatPrice } from "../../../../../../utils/maths.jsx";
import { convertStringToBoolean } from "../../../../../../utils/string.jsx";
import Sticker from "../../../../../reusable-ui/Sticker.jsx";
export default function BasketProducts() {
  const {
    username,
    basket,
    isModeAdmin,
    handleDeleteBasketProduct,
    menu,
    handleProductSelected,
    productSelected,
  } = useContext(OrderContext);

  const handleOnDelete = (event, id) => {
    event.stopPropagation();
    handleDeleteBasketProduct(id, username);
  };

  return (
    <TransitionGroup component={BasketProductsStyled}>
      {basket.map((basketProduct) => {
        const menuProduct = findObjectById(basketProduct.id, menu);
        return (
          <CSSTransition
            appear={true}
            classNames={"animation-basket"}
            key={basketProduct.id}
            timeout={500}
          >
            <div className="card-container">
              {convertStringToBoolean(menuProduct.isPublicised) && (
                <Sticker className="badge-new" />
              )}
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
                className="card"
                price={
                  convertStringToBoolean(menuProduct.isAvailable)
                    ? formatPrice(menuProduct.price)
                    : BASKET_MESSAGE.NOT_AVAILABLE
                }
              />
            </div>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

const BasketProductsStyled = styled.div`
  /* border: 1px solid red; */
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  .animation-basket-appear {
    .card {
      transform: translateX(100px);
      opacity: 0%;
    }
  }

  ${basketAnimation}

  .card-container {
    margin: 10px 16px;
    position: relative;

    .badge-new {
      position: absolute;
      z-index: 1;
      bottom: 10%;
      left: 21%;
      transform: translateY(-21%);
      transform: translateX(-5%);
    }
  }
  &.card-container {
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
