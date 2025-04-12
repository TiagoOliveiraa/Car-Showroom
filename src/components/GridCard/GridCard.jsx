import * as style from "./GridCard.styled"

export function GridCard(props) {
  return (
    <style.Card>
      <style.CardTitle>{props.title}</style.CardTitle>
      <style.HorizontalLine />
      <style.GridContainer>
        {Object.values(props.equipment).map((item, index) => {
          return (
            <style.FlexRow key={index}>
              <style.Text>{item}</style.Text>
            </style.FlexRow>
          );
        })}
      </style.GridContainer>
    </style.Card>
  );
}
