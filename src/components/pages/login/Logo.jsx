import styled from "styled-components";
import { theme } from "../../../../F03/theme";

export default function Logo() {
  return (
    <LogoStyled>
      <a href="#">crazee</a>
      <img src="F03\F03 logo-orange.png" alt="logo crazee-burger" />
      <a href="#">burger</a>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.P6};
    font-family: "Amatic SC", sans-serif;
    font-weight: bold;
    text-transform: uppercase;
  }

  img {
    width: ${theme.fonts.P6};
  }
`;
