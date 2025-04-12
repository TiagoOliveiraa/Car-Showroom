import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  FavouriteButton,
  FocusSpecsCard,
  NavigateButton,
  VehicleDetailCard,
  SpecsCard,
  GridCard,
} from "../components";
import styled from "styled-components";
import DefaultImage from "../assets/CarCardBackground.png";

export function VehicleDetail() {
  const params = useParams();
  const carsList = useSelector((state) => state.carState.carsList);
  const carImages = useSelector((state) => state.carState.carImages);
  const car = carsList[params.id];

  function getCarImage(make, model) {
    if (carImages.find((image) => image === make + model))
      return `/cars/${make}${model}.png`;
    else return DefaultImage;
  }

  const specifications = [
    {"Vehicle Type": car.details.specification.vehicleType},
    {"Colour": car.details.specification.colour},
    {"CO2 Emissions": car.details.specification.co2Emissions},
    {"Nox Emissions": car.details.specification.noxEmissions},
    {"Number Of Keys": car.details.specification.numberOfKeys},
  ]

  const ownership = [
    {"Log Book": car.details.ownership.logBook},
    {"Number Of Owners": car.details.ownership.numberOfOwners},
    {"Date Of Registration": car.details.ownership.dateOfRegistration},
  ]

  console.log(car.details.equipment);
  

  return (
    <main>
      <TopBar>
        <NavigateButton navigate="/" buttonText="Go Back" />
        <FavouriteButton id={params.id} favourite={car.favourite} />
      </TopBar>
      <CarContainer>
        <DetailContainer>
          <CarImage src={getCarImage(car.make, car.model)} />
          <FocusSpecsCard car={car}/>
          <SpecsCard title="Car Specifications" specs={specifications}/>
          <SpecsCard title="Car Ownership Details" specs={ownership}/>
          <GridCard title="Car Equipment" equipment={car.details.equipment}/>
        </DetailContainer>
        <FixedContainer>
          <VehicleDetailCard car={car}/>
        </FixedContainer>
      </CarContainer>
    </main>
  );
}

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  alignitems: center;
  width: 70%;
  justify-self: center;
`;

const CarContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 70%;
  min-height: 100vh;
  justify-self: center;
  gap: 10px;

  @media (max-width:1000px){
    flex-direction: column-reverse;
  }

  @media (max-width:600px){
   width: 90%; 
  }
`;

const DetailContainer = styled.div`
  width: 70%;
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-self: start;
  border-radius: 10px;
  gap: 20px;

  @media (max-width:1000px){
   width: 100%; 
  }
`;

const FixedContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  height: auto;
  width: 30%;

  @media (max-width:1000px){
   width: 100%;
   min-height: auto; 
  }

`;

const CarImage = styled.img`
  height: 500px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
`;
