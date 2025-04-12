import { render, screen } from "@testing-library/react";
import { FavouriteButton } from "./FavouriteButton";
import { Provider, useDispatch } from "react-redux";
import { store } from "../../store/store";
import userEvent from "@testing-library/user-event";
import { toggleFavourite } from "../../store/carSlice";

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: jest.fn(),
}));

describe("Test Favourite Button Component", () => {
    let mockDispatch;

    beforeEach(() => {
        mockDispatch = jest.fn();
        useDispatch.mockReturnValue(mockDispatch);
    })

  test("Render Right Image with Favourite False", () => {
    render(
      <Provider store={store}>
        <FavouriteButton id={0} favourite={false} />
      </Provider>
    );
    expect(screen.getByAltText("Heart Shape")).toHaveAttribute(
      "src",
      "heart-empty.svg"
    );
  });

  test("Render Right Image with Favourite True", () => {
    render(
      <Provider store={store}>
        <FavouriteButton id={0} favourite={true} />
      </Provider>
    );
    expect(screen.getByAltText("Heart Shape")).toHaveAttribute(
      "src",
      "heart-full.svg"
    );
  });

  test("Check Click Button Activate Toggle Favourite Function Correctly", () => {
    render(
      <Provider store={store}>
        <FavouriteButton id={0} favourite={true} />
      </Provider>
    );
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(mockDispatch).toHaveBeenCalledWith(toggleFavourite(0));
  });
});
