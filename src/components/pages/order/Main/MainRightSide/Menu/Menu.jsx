import { useContext, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme/index.js";
import Card from "../../../../../reusable-ui/Card.jsx";
import { formatPrice } from "../../../../../../utils/maths.jsx";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import EmptyMenuClient from "./EmptyMenuClient.jsx";
import EmptyMenuAdmin from "./EmptyMenuAdmin.jsx";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

export default function Menu() {
  const { menu, isModeAdmin, handleDelete, resetMenu, setProductSelected } =
    useContext(OrderContext);

  //state

  //comportements
  const handleClick = (idProductSelected) => {
    const productClickedOn = menu.find(
      (product) => product.id === idProductSelected
    );
    setProductSelected(productClickedOn);
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
            imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={() => handleDelete(id)}
            onClick={() => handleClick(id)}
            isHoverable={isModeAdmin}
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
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;
