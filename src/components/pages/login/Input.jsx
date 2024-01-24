import styled from "styled-components";

export default function Input({ value, onChange, Icon, ...restProps }) {
  return (
    <InputStyled>
      {Icon && Icon}
      <input value={value} onChange={onChange} type="text" {...restProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  /* border: 1px solid red; */
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;

  .icon {
    color: #93a2b1;
    margin-right: 8px;
    font-size: 15px;
  }

  input {
    border: none;
    font-size: 15px;
    color: #17161a;
    /* width: 100%; */
  }

  &::placeholder {
    background: white;
    color: lightgrey;
  }
`;
