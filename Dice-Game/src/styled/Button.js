import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 10px 10px;
  background: black;
  border-radius: 5px;
  min-width: 220px;
  font-size: 16px;
  border: 2px solid transparent;
  transition: all 0.2s ease-in;
  cursor: pointer;

  &:hover {
    background-color: white;
    font-weight: 500;
    border: 2px solid black;
    color: black;
    transition: all 0.2s ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  font-weight: 500;
  border: 2px solid black;
  color: black;
  transition: all 0.2s ease-in;
`;
