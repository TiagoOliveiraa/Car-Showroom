import * as style from "./SpecsCard.styled"

export function SpecsCard(props) {

  return (
    <style.SpecsContainer>
      <style.CardTitle>{props.title}</style.CardTitle>
      <style.HorizontalLine />
      {props.specs.map((spec,index) => {
        const [[key,value]] = Object.entries(spec)
        return (
        <style.FlexRow key={index}>
          <style.TitleText>{key}</style.TitleText>
          <style.DescriptionText>{value}</style.DescriptionText>
        </style.FlexRow>);
      })}
    </style.SpecsContainer>
  );
}