import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AdminPanel/AddForm.jsx";
import EditForm from "./AdminPanel/EditForm.jsx";
import HintMessage from "./AdminPanel/HintMessage.jsx";
import { FiSettings } from "react-icons/fi";
import Form from "./AdminPanel/Form.jsx";
import Button from "../../../../../reusable-ui/Button.jsx";

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
  {
    index: "manger",
    label: "autre onglet",
    Icon: <FiSettings />,
    Content: <UnComposant />,
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

export function UnComposant() {
  return (
    <Form
      product={{
        id: "1",
        imageSource: "/images/burger-bacon-egg.png",
        title: "Burger Smoke BBQ",
        price: 5.598,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
      }}
    >
      <div style={{ width: "50%" }}>
        <Button version="normal" label={"Bonjour"} />
      </div>
    </Form>
  );
}
