import { useContext, useState } from "react";
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
} from "../../../../../../enums/product.jsx";

export default function Menu() {
  const {
    menu,
    isModeAdmin,
    handleDelete,
    resetMenu,
    setProductSelected,
    productSelected,
    setCurrentTabSelected,
    setIsCollapsed,
    titleEditRef,
  } = useContext(OrderContext);

  //state

  //comportements
  const handleClick = async (idProductSelected) => {
    if (!isModeAdmin) return;

    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    const productClickedOn = menu.find(
      (product) => product.id === idProductSelected
    );
    await setProductSelected(productClickedOn);
    titleEditRef.current.focus();
  };

  const handleOnDelete = (event, idProductToDelete) => {
    event.stopPropagation();
    handleDelete(idProductToDelete);

    idProductToDelete === productSelected.id &&
      setProductSelected(EMPTY_PRODUCT);
    titleEditRef.current.focus();
  };

  //affichage
  if (menu.length === 0) {
    if (!isModeAdmin) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={resetMenu} />;
  }

  return (
    <MenuStyled>
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={(event) => handleOnDelete(event, id)}
            onClick={() => handleClick(id)}
            isHoverable={isModeAdmin}
            // isSelected={id === productSelected.id}
            isSelected={checkIfProductIsClicked(id, productSelected.id)}
          />
        );
      })}
    </MenuStyled>
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
`;
