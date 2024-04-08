import styled from "styled-components";
import { theme } from "../../../../theme/index.js";
import MainRightSide from "./MainRightSide/MainRightSide.jsx";
import Basket from "./Basket/Basket.jsx";

export default function Main() {
  return (
    <MainStyled>
      <Basket />
      <MainRightSide />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  /* flex : 1; */
  height: calc(95vh - 10vh); //95vh (le container) - 10vh (height du basket)

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.strong};

  display: grid;
  grid-template-columns: 25% 1fr;

  overflow: hidden;
  /* .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
  } */
`;
