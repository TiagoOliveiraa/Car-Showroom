import * as style from "./FocusSpecsCard.styled";
import Gas from "../../assets/Gas.svg";
import Door from "../../assets/carDoor.svg";
import Gear from "../../assets/gearShift.svg";
import Road from "../../assets/road.svg";

export function FocusSpecsCard(props) {
  return (
    <style.FocusCard>
      <style.FlexRow>
        <style.SvgImage src={Road} />
        <style.DescriptionText>{props.car.mileage} mil</style.DescriptionText>
      </style.FlexRow>
      <style.FlexRow>
        <style.SvgImage src={Gas} />
        <style.DescriptionText>{props.car.fuel}</style.DescriptionText>
      </style.FlexRow>
      <style.FlexRow>
        <style.SvgImage src={Gear} />
        <style.DescriptionText>
          {props.car.details.specification.transmission}
        </style.DescriptionText>
      </style.FlexRow>
      <style.FlexRow>
        <style.SvgImage src={Door} />
        <style.DescriptionText>
          {props.car.details.specification.numberOfDoors}
        </style.DescriptionText>
      </style.FlexRow>
    </style.FocusCard>
  );
}
