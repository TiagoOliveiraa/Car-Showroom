import { useNavigate } from "react-router-dom";
import * as style from "./NavigateButton.styled"

export function NavigateButton(props) {
  const navigate = useNavigate();

  return (
    <style.ButtonContainer>
      <style.Button onClick={() => navigate(props.navigate)}>
        {props.buttonText}
      </style.Button>
    </style.ButtonContainer>
  );
}