import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const getTabsConfig = (currentPageSelected) => [
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
    className: currentPageSelected === "add" ? "is-active" : "",
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    className: currentPageSelected === "edit" ? "is-active" : "",
  },
];

//tabsConfig est une fonction qui renvoit un tableau : () => []
//transformer en fonction permet de pouvoir envoyer des parametres dont la fonction aurait besoin, ici currentPageSelected,
//faire un appel de fonction qui renvoit le param currentPageSelected dans le fichier où on a besoin de tabsConfig
//note : on ne va plus mapper sur le tableau tabsConfig mais le nouveau tableau qui appelle la fonction getTabsConfig
