import styled from "styled-components";

export const FilterBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
  justify-self: center;
  min-height: 150px;
  position: relative;
  transform: translateY(-50%);
  background-color: #ea7100dd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  gap: 15px;
  color: white;

  @media (max-width: 700px){
    width: 100%;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    height: 30px;
    position: absolute;
    right: 10px;
    cursor: pointer;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  justify-self: center;
  width: 100%;
  gap: 15px;

  ${'' /* @media (max-width: 700px){
    grid-template-columns: 1fr;
  } */}
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;

  select {
    padding: 10px;
    width: 80%;
    border-radius: 5px;
  }

  @media (max-width: 1100px) {
    width: 75%;
    justify-self: center;
  }
`;

export const BidFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  font-weight: 600;

  @media (max-width: 1100px) {
    width: 75%;
    justify-self: center;
    font-size: 0.8rem;
    p{
      width: 50%;
    }
  }
`;

export const Slider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 80%;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background-color: #04aa6d;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #04aa6d;
    cursor: pointer;
  }
`;

export const FavouriteFilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 25px;
  padding: 10px;
  font-weight: 600;

  input {
    padding: 10px;
  }

  @media (max-width: 1100px) {
    width: 75%;
    justify-self: center;
  }
`;

export const CheckBoxLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 1.4rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  input:checked ~ .checkmark {
    background-color: #04aa6d;

    input:checked ~ .checkmark:after {
      display: block;
    }
  }

  @media (max-width: 1100px) {
        font-size: 1rem;
        width: 50%;
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;

  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
  }
`;

export const ApplyContainer = styled.div`
  padding: 15px;
  position: absolute;
  bottom: 0;

  button {
    padding: 5px;
    border-radius: 5px;
    border: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    font-weight: 600;
  }

  button:hover {
    background-color: #04aa6d;
    color: white;
  }
`;