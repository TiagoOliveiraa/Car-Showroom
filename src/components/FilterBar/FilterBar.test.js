import { render, screen } from "@testing-library/react";
import { FilterBar } from "./FilterBar";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import userEvent from "@testing-library/user-event";
import { useDispatch } from "react-redux";
import { updateFilters } from "../../store/filterSlice";

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: jest.fn(),
}));


describe("Test Filter Bar Component", () => {
    let mockDispatch;

    beforeEach(() => {
        mockDispatch = jest.fn();
        useDispatch.mockReturnValue(mockDispatch);
    })

  test("Render all filter components", () => {
    render(
      <Provider store={store}>
        <FilterBar />
      </Provider>
    );
    expect(screen.getByTestId("makeFilter")).toBeInTheDocument();
    expect(screen.getByTestId("modelFilter")).toBeInTheDocument();
    expect(screen.getByTestId("bidFilter")).toBeInTheDocument();
    expect(screen.getByTestId("favouriteFilter")).toBeInTheDocument();
  });

  test("Check if filter make updates filter model", () => {
    render(
        <Provider store={store}>
          <FilterBar />
        </Provider>
      );
      const makeSelect = screen.getByTestId("makeFilter");
      userEvent.selectOptions(makeSelect, "Toyota");

      const modelSelect = screen.getByTestId("modelFilter");
      expect(modelSelect).toHaveValue("");

      expect(screen.getByText("Corolla")).toBeInTheDocument();
      expect(screen.getByText("C-HR")).toBeInTheDocument();
  })

  test("Check if only favourites filter change value on click", () => {
    render(
        <Provider store={store}>
          <FilterBar />
        </Provider>
      );

    const favouriteFilter = screen.getByTestId("favouriteFilter");
    expect(favouriteFilter).not.toBeChecked();
    userEvent.click(favouriteFilter);
    expect(favouriteFilter).toBeChecked();
  })

  test("Clear all filter when click on icon", () => {
    render(
        <Provider store={store}>
          <FilterBar />
        </Provider>
      );

    const clearIcon = screen.getByAltText("Clear Filter");
    userEvent.click(clearIcon);

    expect(screen.getByTestId("makeFilter")).toHaveValue("");
    expect(screen.getByTestId("modelFilter")).toHaveValue("");
    expect(screen.getByTestId("bidFilter")).toHaveValue("20000");
    expect(screen.getByTestId("favouriteFilter")).not.toBeChecked();
  })

  test("Filters to be sent after click on button", () => {
    render(
        <Provider store={store}>
          <FilterBar />
        </Provider>
      );

      const applyButton = screen.getByText("Apply");
      userEvent.click(applyButton);

      expect(mockDispatch).toHaveBeenCalledWith(
        updateFilters({
            make: "",
            model: "",
            bid: 20000,
            favourite: false,
        })
      )
  })


  

});
