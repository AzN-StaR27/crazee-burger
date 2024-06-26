import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "../../../reusable-ui/Logo.jsx";
import { theme } from "../../../../theme/index.js";
import { refreshPage } from "../../../../utils/window.jsx";
import BasketToggle from "./BasketToggle.jsx";
export default function Navbar() {
  return (
    <NavbarStyled>
      <Logo className={"logo-order-page"} onClick={refreshPage} />
      <NavbarRightSide />
      <BasketToggle />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  position: relative;

  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  border-bottom: 1px solid ${theme.colors.greyLight};

  .logo-order-page {
    cursor: pointer;
  }

  @media screen and (max-width: 615px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;
