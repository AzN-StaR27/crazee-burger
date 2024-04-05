import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AdminPanel/AddForm.jsx";
import EditForm from "./AdminPanel/EditForm.jsx";
import HintMessage from "./AdminPanel/HintMessage.jsx";

export const getTabsConfig = (hasAlreadyBeenClicked) => [
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    Content: <AddForm />,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    Content: hasAlreadyBeenClicked ? <EditForm /> : <HintMessage />,
  },
];
//tabsConfig est une fonction qui renvoit un tableau : () => []
//transformer en fonction permet de pouvoir envoyer des parametres dont la fonction aurait besoin, ici currentPageSelected,
//faire un appel de fonction qui renvoit le param currentPageSelected dans le fichier où on a besoin de tabsConfig
//note : on ne va plus mapper sur le tableau tabsConfig mais le nouveau tableau qui appelle la fonction getTabsConfig

export const getTabSelected = (tabs, currentTabSelected) => {
  return tabs.find((tab) => tab.index === currentTabSelected);
};
//renvoi l'objet de la currentTab
