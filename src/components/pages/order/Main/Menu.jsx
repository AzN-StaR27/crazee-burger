import { useContext, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Card from "../../../reusable-ui/Card.jsx";
import { formatPrice } from "../../../../utils/maths.jsx";
import OrderContext from "../../../../context/OrderContext.jsx";

const IMAGE_BY_DEFAULT = "../../../../../public/images/coming-soon.png";

export default function Menu() {
  const { menu, isModeAdmin, handleDelete } = useContext(OrderContext);

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
