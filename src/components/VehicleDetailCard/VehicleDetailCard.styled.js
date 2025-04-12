import styled from "styled-components";


export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 10px;
  border-radius: 10px;
  background-color: #f4f4f4;

  @media (max-width: 1000px){
    position: relative;
    height: 200px;
  }

`;

export const DisplayHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 1000px){
    align-items: center;
    width: 100%;
  }
`;

export const AuctionInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px;
  width: 100%;
  gap: 20px;

  @media (max-width: 1000px){
    flex-direction: row;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 1400px){
    flex-direction: column;
  }

`;

export const FocusText = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;

  @media (max-width: 1400px){
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const DescriptionText = styled.h3`
  font-size: 1rem;
  color: dimgrey;
`;

export const SmallText = styled.p`
  font-size: 0.8rem;
  color: dimgrey;

  @media (max-width: 600px) {
    font-size: 0.6rem;
  }

`;
