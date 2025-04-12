import styled from "styled-components";


export const PageOrganizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 4%;

  @media (max-width: 700px){
    flex-direction: row;
    margin-top: 100px;
    right: 50%;
    transform: translateX(50%);
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 10px;
  gap: 10px;
  align-items: center;
  transform: translateY(-200%);

  @media (max-width: 700px){
    font-size: 0.8rem;
  }
`;

export const Select = styled.select`
  padding: 5px;
  border-radius: 5px;
  background-color: #ea7300;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  color: white;
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 15px;
  gap: 10px;
  font-weight: 400;

  button {
    background-color: #ea7300;
    color: white;
    padding: 10px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: 700;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
`;
