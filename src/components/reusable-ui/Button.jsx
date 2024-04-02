import styled, { css } from "styled-components";
import { theme } from "../../theme";

type size = "small" | "regular" | "large";
type state = "clicked" | "focused" | "hovered" | "disabled";

export default function Button({
  className,
  label,
  Icon,
  version = "normal",
  onClick,
  size,
  state,
}) {
  return (
    <ButtonStyled className={className} version={version} onClick={onClick}>
      <span>{label}</span>
      <div className="icon">{Icon && Icon}</div>
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  /* ${(props) => props.version === "normal" && extraStylePrimary};
  ${(props) => props.version === "success" && extraStyleSuccess}; */

  ${({ version, size }) => getButtonStyle(version, size)};
`;

const getButtonStyle = (version, size) => {
  if (version === "primary") return getExtraStylePrimary(size, state);
  if (version === "success") return getExtraStyleSuccess(size, state);
};

const getExtraStylePrimary = (size, state) => {
  return css`
    width: 100%;
    /* border: 1px solid red; */
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;

    padding: 18px 24px;
    border-radius: 5px;
    font-size: ${sizesOptions[size]};
    font-weight: 800;
    color: white;
    background-color: #ff9f1b;
    border: ${BORDER_COLORS[state]};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
      transition: all 200ms ease-out;
    }

    &:active {
      color: ${theme.colors.white};
      background-color: #ff9f1b;
    }

    &.is-disabled {
      opacity: 50%;
      cursor: not-allowed;
      z-index: 2;
    }

    &.with-focus {
      border: 1px solid white;
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      :hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.white};
      }
      :active {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
      }
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;
};

const getExtraStyleSuccess = css`
  cursor: pointer;
  color: ${theme.colors.white};
  background: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};
  border-radius: ${theme.borderRadius.round};
  height: 35px;
  padding: 0 1.5em;
  font-weight: ${theme.fonts.weights.semiBold};
  :hover {
    background: ${theme.colors.white};
    color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
  :active {
    color: ${theme.colors.white};
    background: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
`;

const extraStyle = {
  primary: extraStylePrimary,
  success: extraStyleSuccess,
};

const sizesOptions = {
  small: extraStyleSmall,
  normal: extraStyleNormal,
  large: extraStyleLarge,
};

const BORDER_COLORS = {
  clicked: "grey",
  enabled: "blue",
  focused: "white",
  disabled: "black",
};
