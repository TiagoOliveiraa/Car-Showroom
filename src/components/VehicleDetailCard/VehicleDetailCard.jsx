import * as style from "./VehicleDetailCard.styled"

export function VehicleDetailCard(props) {
  return (
    <style.CardContainer>
      <style.DisplayHeaderContainer>
        <style.FocusText>
          {props.car.make} {props.car.model}
        </style.FocusText>
        <style.DescriptionText>
          {props.car.engineSize} {props.car.year}
        </style.DescriptionText>
      </style.DisplayHeaderContainer>
      <style.AuctionInfoContainer>
        <style.FlexRow>
          <style.FocusText>£ {props.car.startingBid}</style.FocusText>
          <style.SmallText>Starting Bid</style.SmallText>
        </style.FlexRow>
        <style.FlexRow>
          <style.FocusText>{props.car.auctionDateTime.split(" ")[0]} </style.FocusText>
          <style.SmallText>Auction Date</style.SmallText>
        </style.FlexRow>

        <style.FlexRow>
          <style.FocusText>{props.car.auctionDateTime.split(" ")[1]} </style.FocusText>
          <style.SmallText>Auction Hour</style.SmallText>
        </style.FlexRow>
      </style.AuctionInfoContainer>
    </style.CardContainer>
  );
}
