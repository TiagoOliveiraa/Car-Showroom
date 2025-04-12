import DefaultImage from "../../assets/CarCardBackground.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FavouriteButton } from "..";
import * as style from "./CarCard.styled"
import { useNavigate } from "react-router-dom";

export function CarCard(props) {
  const [timeToAuction, setTimeToAuction] = useState("");
  const navigate = useNavigate();
  const carImages = useSelector((state) => state.carState.carImages);

  function calculateTimeLeft() {
    const [datePart, hourPart] = props.car.auctionDateTime.split(" ");
    const [year, month, day] = datePart.split("/").map(Number);
    const [hour, minute, second] = hourPart.split(":").map(Number);

    const auctionDate = new Date(
      year + 1,
      month - 1,
      day,
      hour,
      minute,
      second
    ); //I added 1 to year to make sense since the year was 2024.
    const now = new Date();

    const diffInMs = auctionDate - now;

    const minutesLeft = Math.floor(diffInMs / (1000 * 60));
    const hoursLeft = Math.floor(minutesLeft / 60);
    const daysLeft = Math.floor(hoursLeft / 24);

    if (daysLeft >= 1) {
      const hours = hoursLeft % 24;
      return `${daysLeft} days ${hours} hours`;
    } else {
      const minutes = minutesLeft % 60;
      return `${hoursLeft.toString().padStart(2, "0")}h ${minutes
        .toString()
        .padStart(2, "0")}m`;
    }
  }

  function getCarImage(make, model) {
    if (carImages.find((image) => image === make + model))
      return `cars/${make}${model}.png`;
    else return DefaultImage;
  }

  useEffect(() => {
    setTimeToAuction(calculateTimeLeft());

    const interval = setInterval(() => {
      setTimeToAuction(calculateTimeLeft());
    }, 30000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.car.auctionDateTime]);

  return (
    <style.CarContainer onClick={() => navigate(`vehicles/${props.car.id}`)} data-testid="car-card-container">
      <style.ImageContainer>
        <img src={getCarImage(props.car.make, props.car.model)} alt="Car" />
      </style.ImageContainer>
      <style.TextContainer>
        <style.HeaderContainer>
          <h2>
            {props.car.make} {props.car.model}
          </h2>
          <FavouriteButton id={props.car.id} favourite={props.car.favourite} />
        </style.HeaderContainer>

        <style.DetailsContainer>
          <p>Year: {props.car.year}</p>
          <p>Miles: {props.car.mileage} mi</p>
          <p>Fuel: {props.car.fuel}</p>
          <p>Engine Size: {props.car.engineSize}</p>
        </style.DetailsContainer>

        <style.AuctionContainer>
          <p>Starting Bid</p>
          <h3>£ {props.car.startingBid}</h3>
          <p>Auction In:</p>
          <h3>{timeToAuction}</h3>
        </style.AuctionContainer>

        <p></p>
      </style.TextContainer>
    </style.CarContainer>
  );
}

