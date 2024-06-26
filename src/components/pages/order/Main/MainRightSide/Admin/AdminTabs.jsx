//@ts-nocheck
import React from "react";
import styled from "styled-components";
import Tab from "../../../../../reusable-ui/Tab.jsx";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import { getTabsConfig } from "./TabsConfig.jsx";
export default function AdminTabs() {
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(OrderContext);

  const tabs = getTabsConfig();

  const selectTab = (tabSelected) => {
    setIsCollapsed(false); //ouvre moi le panel ds ts les cas
    setCurrentTabSelected(tabSelected); //réactualise l'onglet sélectionné
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
            key={tab.index}
            label={tab.label}
            Icon={tab.Icon}
            onClick={() => {
              selectTab(tab.index);
            }}
            className={currentTabSelected == tab.index ? "is-active" : ""}
          />
        );
      })}
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;

  .is-active {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }

  button {
    margin-left: 1px;
  }
  @media screen and (min-width: 402px) {
    padding: 0 20px;
  }
`;
