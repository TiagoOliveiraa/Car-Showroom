import { useDispatch } from "react-redux";
import { toggleFavourite } from "../../store/carSlice";

import emptyHeart from "../../assets/heart-empty.svg";
import fullHeart from "../../assets/heart-full.svg";
import * as style from "./FavouriteButton.styled"

export function FavouriteButton(props) {
  const dispatch = useDispatch();

  return (
    <style.Button
      onClick={(event) => {
        event.stopPropagation();
        dispatch(toggleFavourite(props.id));
      }}
    >
      <style.Image src={props.favourite ? fullHeart : emptyHeart} alt="Heart Shape" />
    </style.Button>
  );
}
