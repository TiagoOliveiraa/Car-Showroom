import { render, screen } from "@testing-library/react";
import { VehicleDetailCard } from "./VehicleDetailCard";

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

describe("Test Vehicle Detail Card Component", () => {
  test("Render information sent by prop", () => {
    render(
      <VehicleDetailCard car={car}/>
    );
    expect(screen.getByText("Toyota C-HR")).toBeInTheDocument();
    expect(screen.getByText("1.8L 2022")).toBeInTheDocument();
    expect(screen.getByText("£ 17000")).toBeInTheDocument();
    expect(screen.getByText("2024/04/15")).toBeInTheDocument();
    expect(screen.getByText("09:00:00")).toBeInTheDocument();
  });
});
