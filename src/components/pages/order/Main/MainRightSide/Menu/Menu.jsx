import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme/index.js";
import Card from "../../../../../reusable-ui/Card.jsx";
import { formatPrice } from "../../../../../../utils/maths.jsx";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import EmptyMenuClient from "./EmptyMenuClient.jsx";
import EmptyMenuAdmin from "./EmptyMenuAdmin.jsx";
import { checkIfProductIsClicked } from "./helper.jsx";
import {
  EMPTY_PRODUCT,
  IMAGE_COMING_SOON,
  IMAGE_NO_STOCK,
} from "../../../../../../enums/product.jsx";
import { findObjectById, isEmpty } from "../../../../../../utils/array.jsx";
import Loader from "./Loader.jsx";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { menuAnimation } from "../../../../../../theme/animations.jsx";
import { convertStringToBoolean } from "../../../../../../utils/string.jsx";

export default function Menu() {
  const {
    username,
    menu,
    isModeAdmin,
    handleDelete,
    resetMenu,
    setProductSelected,
    productSelected,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleProductSelected,
  } = useContext(OrderContext);

  //state

  //comportements

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation();
    handleDelete(idProductToDelete, username);
    handleDeleteBasketProduct(idProductToDelete, username);

    idProductToDelete === productSelected.id &&
      setProductSelected(EMPTY_PRODUCT);
  };

  const handleAddButton = (event, idProductToAdd) => {
    event.stopPropagation();
    const productToAdd = findObjectById(idProductToAdd, menu);
    handleAddToBasket(productToAdd, username);
  };

  //affichage

  if (menu === undefined) return <Loader />;

  if (isEmpty(menu)) {
    if (!isModeAdmin) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={() => resetMenu(username)} />;
  }

  return (
    <TransitionGroup component={MenuStyled}>
      {menu.map(({ id, title, imageSource, price, isAvailable }) => {
        return (
          <CSSTransition classNames={"menu-animation"} key={id} timeout={300}>
            <Card
              title={title}
              imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
              leftDescription={formatPrice(price)}
              hasDeleteButton={isModeAdmin}
              onDelete={(event) => handleCardDelete(event, id)}
              onClick={isModeAdmin ? () => handleProductSelected(id) : null}
              isHoverable={isModeAdmin}
              // isSelected={id === productSelected.id}
              isSelected={checkIfProductIsClicked(id, productSelected.id)}
              onAdd={(event) => handleAddButton(event, id)}
              overlapImageSource={IMAGE_NO_STOCK}
              isOverlapImageVisible={
                convertStringToBoolean(isAvailable) === false
              }
            />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
  overflow-y: scroll;
  /* border-bottom-left-radius: ${theme.borderRadius.extraRound}; */
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  ${menuAnimation}
`;
