import styled from "styled-components";


export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  z-index: 10;

  ${({ $isOverlay }) => $isOverlay &&`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  `}

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  left: 15px;

  img {
      margin-right: 15px;
      height: 30px;
  }

  @media (max-width: 700px) {
    position: none;
    display: flex;
    flex-direction: column;
    top: 15px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  h1{
      font-family: "Oswald", sans-serif;
      font-size: 3rem;
      color: #2b2d42;
      letter-spacing: 2px;
      text-transform: uppercase;
      text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.05);
  }

  img {
      height: 60px;
  }

  @media (max-width: 700px){


    h1{
      font-size: 1.5rem;
      width: 50%;
      text-align: center;
    }

  }
`;