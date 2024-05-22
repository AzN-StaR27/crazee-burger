import React, { useContext, useState } from "react";
import styled from "styled-components";
import { SlBasket } from "react-icons/sl";
import { SlBookOpen } from "react-icons/sl";
import OrderContext from "../../../../context/OrderContext";

export default function BasketToggle() {
  const { mainStyle, handleMainLayout } = useContext(OrderContext);

  return (
    <BasketToggleStyled>
      {!mainStyle ? (
        <SlBookOpen className="basketIcon" onClick={handleMainLayout} />
      ) : (
        <SlBasket className="basketIcon" onClick={handleMainLayout} />
      )}
    </BasketToggleStyled>
  );
}

const BasketToggleStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 10px;
  right: 10px;

  .basketIcon {
    font-size: 36px;
    color: #747b91;
  }

  @media screen and (min-width: 816px) {
    display: none;
  }
`;
