import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../../F03/theme";
import { FaUserCircle } from "react-icons/fa";

export default function LoginForm() {
  //state

  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  //comportement

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue chez nous !</h1>
        <br />
        <h2>Connectez-vous</h2>
      </div>
      <div className="cta-container">
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prénom"
          required
        />
        <button>Accédez à votre espace</button>
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1,
  h2 {
    font-family: "Amatic SC", sans-serif;
    color: ${theme.colors.white};
    position: relative;
    text-align: center;
  }

  h1::after {
    content: "";
    background-color: ${theme.colors.primary_burger};
    height: 3px;
    width: 500px;
    position: absolute;
    top: 80px;
    left: -70%;
  }

  input {
    height: 40px;
    width: 300px;
    border-radius: 5px;
    padding-left: 40px;
    border: none;
  }

  button {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    height: 40px;
    width: 340px;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    position: relative;
  }

  button::after {
    content: ">";
    font-size: large;
    position: absolute;
    top: 11px;
    left: 80%;
  }

  .cta-container {
    display: flex;
    flex-direction: column;
  }
`;
