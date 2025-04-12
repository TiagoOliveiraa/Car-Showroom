import styled from "styled-components";


export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  justify-self: center;
`;

export const Button = styled.button`
  padding: 8px;
  background-color: #ea7100dd;
  border-radius: 5px;
  color: white;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #d26500dd;
  }
`;
