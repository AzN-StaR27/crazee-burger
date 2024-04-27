import React from "react";
import styled from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel/AdminPanel.jsx";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import { fadeInFromBottom } from "../../../../../../theme/animations.jsx";
import { theme } from "../../../../../../theme/index.js";

export default function Admin() {
  const { isCollapsed } = useContext(OrderContext);

  return (
    <AdminStyled className="admin">
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  right: 0;

  animation: ${fadeInFromBottom} ${theme.animations.speed.slow} ease-out;
`;
