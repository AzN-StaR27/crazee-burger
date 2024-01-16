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
  background: url() center cover;
`;
