import React, { useContext } from "react";
import styled from "styled-components";
import BasketCard from "./BasketCard";
import { IMAGE_COMING_SOON } from "../../../../../enums/product";
import { findObjectById } from "../../../../../utils/array";
import OrderContext from "../../../../../context/OrderContext.jsx";
import { checkIfProductIsClicked } from "../MainRightSide/Menu/helper.jsx";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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
    <BasketProductsStyled>
      <TransitionGroup>
        {basket.map((basketProduct) => {
          const menuProduct = findObjectById(basketProduct.id, menu);
          return (
            <CSSTransition
              appear={true}
              classNames={"abricot"}
              key={basketProduct.id}
              timeout={500}
            >
              <div className="basket-card">
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
                  className="pomme"
                />
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.div`
  /* border: 1px solid red; */
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  .abricot-appear {
    .pomme {
      transform: translateX(100px);
      opacity: 0%;
    }
  }

  .abricot-appear-active {
    .pomme {
      transition: 0.5s;
      transform: translateX(0);
      opacity: 100%;
    }
  }

  .abricot-enter {
    .pomme {
      transform: translateX(100px);
      opacity: 0%;
    }
  }

  .abricot-enter-active {
    .pomme {
      transition: 0.5s;
      transform: translateX(0);
      opacity: 100%;
    }
  }

  .abricot-exit {
    .pomme {
      transform: translateX(0);
      opacity: 100%;
    }
  }

  .abricot-exit-active {
    .pomme {
      transform: translateX(-100px);
      opacity: 0%;
      transition: 0.5s;
    }
  }
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
