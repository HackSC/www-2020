import styled from "styled-components";

const Button = styled.button`
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background: #ff8379;
  flex-grow: 1;
  font-size: 12px;
  color: #ffffff;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;

  ${({ large }) =>
    large &&
    `
      font-size: 16px;
      padding: 14px 18px;
    `}
`;

export default Button;
