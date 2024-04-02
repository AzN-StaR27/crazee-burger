import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function TextInput({
  onChange,
  Icon,
  className,
  version = "normal",
  ...extraProps
}) {
  return (
    <TextInputStyled className={className} version={version}>
      <div className="icon">{Icon && Icon}</div>
      <input onChange={onChange} type="text" {...extraProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  /* border: 1px solid red; */
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;

  .icon {
    margin: 0 8px 0 10px;
    display: flex; //to center icon vertically
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    width: 100%;

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }

  ${(props) => {
    if (props.version === "normal") return extraStyleNormal;
    if (props.version === "minimalist") return extraStyleMinimalist;
  }}
`;

const extraStyleNormal = css`
  background-color: ${theme.colors.white};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};

  input {
    color: ${theme.colors.dark};
  }

  &::placeholder {
    background: ${theme.colors.white};
  }
`;

const extraStyleMinimalist = css`
  background-color: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  input {
    background: ${theme.colors.background_white}; ////+
    color: ${theme.colors.dark};

    &:focus {
      outline: 0; //// add outline
    }
  }
`;
