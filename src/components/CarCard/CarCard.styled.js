import styled from "styled-components";

export const CarContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 250px;
  width: 70%;
  justify-self: center;
  margin: 30px;

  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: #f4f4f4;
  cursor: pointer;

  &:hover {
    background-color: #ebebeb;
  }

  @media (max-width: 1000px){
    flex-direction: column;
    min-height: 600px;
    padding: 5px;
    width: 80%;
  }

  @media (max-width: 400px){
    width: 95%;
  }
`;

export const ImageContainer = styled.div`
  width: 20%;
  height: 100%;
  border-radius: 5px;
  padding: 10px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  @media (max-width: 1000px){
    width: 50%;
  }

  @media (max-width: 700px){
    width: 80%;
    height: 80%;
  }
`;

export const TextContainer = styled.div`
  width: 80%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding: 10px;

  @media (max-width: 700px){
    padding: 2px;
  }

`;

export const HeaderContainer = styled.div`
  display:flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px){
    font-size: 0.8rem;
    flex-direction: column;
    height: 12.5%;
  }
`;

export const DetailsContainer = styled.div`

    display: flex;
    padding: 10px;
    width: 40%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    color:dimgrey;

    @media (max-width: 700px){
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      align-items: center;
      justify-content: center;
      height: 25%;
      margin-top: -50px;

      p {
        width: 50%;
        font-size: 0.8rem;
      }
    }

`;

export const AuctionContainer = styled.div`
  width:100%;
  padding: 10px;
  display:flex;
  bottom: 0;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  position: absolute;

  h3 {
      font-size: 1.5rem;
  }

  @media (max-width: 700px){
    flex-direction: row;
    height: 25%;
    width: 100%;
    gap: 5px;
    text-align: center;
    justify-content: center;
    align-items: end;

    h3{
      font-size: 0.8rem;
    }

    p{
      font-size: 0.8rem;
    }
  }
`;