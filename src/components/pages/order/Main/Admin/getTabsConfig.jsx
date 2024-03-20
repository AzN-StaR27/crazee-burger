import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline, MdOutlineLocalDrink } from "react-icons/md";
import { BiSun } from "react-icons/bi";
import { GiBaseballGlove } from "react-icons/gi";

export const getTabsConfig = () => [
  // {
  //   index:"chevronUpDown",
  //   label: "",
  //   Icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
  //   onClick: () => {
  //     setIsCollapsed(!isCollapsed);
  //   },
  //   className: isCollapsed ? "is-active" : "",
  // },
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
  },
  // {
  //   index: "theme",
  //   label: "Changer theme",
  //   Icon: <BiSun />,
  // },
  // {
  //   index: "drink",
  //   label: "Boire un verre",
  //   Icon: <MdOutlineLocalDrink />,
  // },
  // {
  //   index: "baseball",
  //   label: "HomeRun",
  //   Icon: <GiBaseballGlove />,
  // },
];
//tabsConfig est une fonction qui renvoit un tableau : () => []
//transformer en fonction permet de pouvoir envoyer des parametres dont la fonction aurait besoin, ici currentPageSelected,
//faire un appel de fonction qui renvoit le param currentPageSelected dans le fichier où on a besoin de tabsConfig
//note : on ne va plus mapper sur le tableau tabsConfig mais le nouveau tableau qui appelle la fonction getTabsConfig

export const getTabSelected = (tabs, currentTabSelected) => {
  return tabs.find((tab) => tab.index === currentTabSelected);
};
//renvoi l'objet de la currentTab
