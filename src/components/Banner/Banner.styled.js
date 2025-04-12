import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  height: 400px;
  width: 100%;
  overflow: hidden;
`;

export const Title = styled.h2`
  position: absolute;
  top: 30%;
  left: 20%;
  color: white;
  font-size: 2.5rem;
  max-width: 200px;
`;

export const BackgroundImage = styled.img`
  object-position: center center;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;