import styled from "styled-components";
import NavbarRightSide from "./NavbarRightSide";
import Logo from "../../reusable-ui/Logo.jsx";
export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Logo />
      <NavbarRightSide username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: blue;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 020px;
  /* align-items: center; */

  .left-side {
    background: pink;
  }
`;
