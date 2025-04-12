import { render, screen } from "@testing-library/react";
import { FocusSpecsCard } from "./FocusSpecsCard";

const car = {
  fuel: "diesel",
  mileage: 743,
  details: {
    specification: {
      transmission: "Manual",
      numberOfDoors: "3",
    },
  },
};

describe("Test Focus Specs Card Component", () => {
  test("Render all details sent by prop", () => {
    render(<FocusSpecsCard car={car} />);
    expect(screen.getByText("diesel")).toBeInTheDocument();
    expect(screen.getByText("743 mil")).toBeInTheDocument();
    expect(screen.getByText("Manual")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });
});
