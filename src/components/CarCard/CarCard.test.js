import { render, screen } from "@testing-library/react";
import { CarCard } from "./CarCard";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import userEvent from "@testing-library/user-event";

const car = {
  make: "Toyota",
  model: "C-HR",
  engineSize: "1.8L",
  fuel: "diesel",
  year: 2022,
  mileage: 743,
  auctionDateTime: "2024/04/15 09:00:00",
  startingBid: 17000,
  favourite: true,
  id: 0,
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}))

describe("Test CarCard Component", () => {
  test("Render Title sent by prop", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CarCard car={car} />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText("Toyota C-HR")).toBeInTheDocument();
  })


  test("Render details sent by prop", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CarCard car={car} />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText("Year: 2022")).toBeInTheDocument();
    expect(screen.getByText("Miles: 743 mi")).toBeInTheDocument();
    expect(screen.getByText("Fuel: diesel")).toBeInTheDocument();
    expect(screen.getByText("Engine Size: 1.8L")).toBeInTheDocument();
  });

  test("Render Auction Details sent by prop", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CarCard car={car} />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText("£ 17000")).toBeInTheDocument();
  })

  test("Render the Right Image", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CarCard car={car} />
        </MemoryRouter>
      </Provider>
    );
    const img = screen.getByAltText("Car");
    expect(img).toHaveAttribute('src', 'cars/ToyotaC-HR.png');
  })

  test("Navigate on Click on Car Card", () => {
    const mockNavigate = jest.fn();
    useNavigate.mockImplementation(() => mockNavigate);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <CarCard car={car} />
        </MemoryRouter>
      </Provider>
    );
    const card = screen.getByTestId("car-card-container");
    userEvent.click(card);
    expect(mockNavigate).toHaveBeenCalledWith('vehicles/0');
  })
});
