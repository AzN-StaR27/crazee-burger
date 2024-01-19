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
  background: url(F03/F03_burger-background.jpg) no-repeat center/cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;
