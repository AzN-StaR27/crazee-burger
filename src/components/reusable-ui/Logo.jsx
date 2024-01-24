import styled from "styled-components";
import { theme } from "../../../F03/theme";

export default function Logo() {
  return (
    <LogoStyled>
      <h1 href="#">crazee</h1>
      <img src="\images\logo-orange.png" alt="logo crazee-burger" />
      <h1 href="#">burger</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  transform: scale(2.5);

  h1 {
    display: inline;
    text-align: center;
    color: #ffa01b;
    font-size: 36px;
    line-height: 1em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
    margin: 0 5px;
  }
`;