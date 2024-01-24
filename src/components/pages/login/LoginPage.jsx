import LoginForm from "./LoginForm";
import Logo from "./Logo";
import styled from "styled-components";

export default function LoginPage() {
  //state

  //comportement

  //affichage
  return (
    <LoginPageStyled>
      <Logo /> <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;

  ::before {
    content: "";
    background: url("/images/burger-and-fries-background.jpg")
      rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
