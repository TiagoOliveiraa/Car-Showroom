import styled from "styled-components";


export const SpecsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 450px;
  background-color: #f4f4f4;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: auto;
  padding: 25px;
  gap: 20px;
`;

export const CardTitle = styled.h2`
  font-size: 1.6rem;
  color: black;
  padding: 15px;
`;

export const TitleText = styled.h3`
  font-size: 1.1rem;
  color: black;
`;

export const DescriptionText = styled.p`
  font-size: 1rem;
  color: dimgrey;
`;

export const HorizontalLine = styled.hr`
  width: 95%;
  align-self: center;
  border-radius: 5px;
  color: black;
`;
