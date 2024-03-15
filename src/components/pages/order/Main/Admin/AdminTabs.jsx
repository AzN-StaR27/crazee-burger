import React from "react";
import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig } from "./getTabsConfig";
export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    currentPageSelected,
    setcurrentPageSelected,
  } = useContext(OrderContext);

  const tabs = getTabsConfig(currentPageSelected);

  const selectTab = (tabSelected) => {
    setIsCollapsed(false); //ouvre moi le panel ds ts les cas
    setcurrentPageSelected(tabSelected); //réactualise l'onglet sélectionné
  };

  //affichage
  return (
    <AdminTabsStyled>
      <Tab
        label=""
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => {
          setIsCollapsed(!isCollapsed);
        }}
        className={isCollapsed ? "is-active" : ""}
      />

      {tabs.map((tab) => {
        return (
          <Tab
            label={tab.label}
            Icon={tab.Icon}
            onClick={() => {
              selectTab(tab.index);
            }}
            className={tab.className}
          />
        );
      })}
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;

  .is-active {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }

  button {
    margin-left: 1px;
  }
`;
