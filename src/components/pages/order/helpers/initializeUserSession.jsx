import { getMenu } from "../../../../api/product";
import { getLocalStorage } from "../../../../utils/window";

export const initialiseUserSession = async (username, setMenu, setBasket) => {
  await initializeMenu(username, setMenu);
  initializeBasket(username, setBasket); //Le basket a besoin des données du menu, c'est pour ça qu'on met un await à initializeMenu
};

const initializeMenu = async (username, setMenu) => {
  const menuReceived = await getMenu(username);
  setMenu(menuReceived);
};

const initializeBasket = (username, setBasket) => {
  const basketReceived = getLocalStorage(username); // LocalStorage est synchrone, pas besoin de "await"
  if (basketReceived) setBasket(basketReceived);
};
