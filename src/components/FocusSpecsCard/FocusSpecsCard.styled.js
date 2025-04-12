import styled from "styled-components";

export const FocusCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  min-height: 200px;
  background-color: #f4f4f4;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 10px;

  @media (max-width: 340px){
    grid-template-columns: 1fr;
    height: auto;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: auto;
  padding: 20px;
  gap: 20px;

  @media (max-width: 340px){
    justify-content: space-around;
  }
`;

export const SvgImage = styled.img`
  height: 50px;
`;

export const DescriptionText = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: dimgrey;

  @media (max-width: 600px){
    font-size: 0.8rem;
  }

`;
