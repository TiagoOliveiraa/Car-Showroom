import * as style from "./Banner.styled";

export function Banner(props) {
  return (
    <style.BannerContainer>
      <style.Title>{props.heading}</style.Title>
      <style.BackgroundImage src={props.imgUrl} alt={props.alt} />
    </style.BannerContainer>
  );
}


