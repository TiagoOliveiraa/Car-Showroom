import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import * as style from "./Header.styled";

export function Header({$isOverlay = false}) {
  return (
    <style.HeaderContainer $isOverlay={$isOverlay}>
      <style.IconContainer>
        {" "}
        <a href="https://github.com/TiagoOliveiraa" target="_blank" rel="noreferrer"><img src={github} alt="Github Logo" /></a>
        <a href="https://www.linkedin.com/in/oliveirafilipetiago/" target="_blank" rel="noreferrer"><img src={linkedin} alt="Linkedin Logo" /></a>
      </style.IconContainer>
      <style.TitleContainer>
        <h1>Vehicle Showroom</h1>
      </style.TitleContainer>
    </style.HeaderContainer>
  );
}