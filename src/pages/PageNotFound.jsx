import React from "react";
import Oops from "../assets/Oops.svg";
import styled from "styled-components";
import { NavigateButton } from "../components";

export function PageNotFound() {
  return (
    <main>
      <Container>
        <MessageContainer>
          <img src={Oops} alt="Worried Men" />
          <h2>Sorry, This Page Doesn't Exist.</h2>
        </MessageContainer>
        <NavigateButton navigate="/" buttonText="Go Back to Cars List" style={{"align-self":"center"}}/>
      </Container>
    </main>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;

  img{
    height: 400px;
  }

  h2{
    width: 30%;
  }

  @media (max-width: 700px) {
    flex-direction: column;

    h2{
      width: 50%;
    }
  }
`;
