import { render, screen } from "@testing-library/react";
import { SpecsCard } from "./SpecsCard";

const specifications = [
    {"Vehicle Type": "Car"},
    {"Colour": "RED"},
    {"CO2 Emissions": "139 g/km"},
    {"Nox Emissions": "230"},
    {"Number Of Keys": "2"},
]

describe("Test Specs Card Component", () => {
  test("Render title sent by prop", () => {
    render(
      <SpecsCard title="Car Specifications" specs={specifications}/>
    );
    expect(screen.getByText("Car Specifications")).toBeInTheDocument();
  });

  // test("Render details sent by prop", () => {
  //   render(
  //     <SpecsCard title="Car Specifications" specs={specifications}/>
  //   );
  //   expect(screen.getByText("Vehicle Type")).toBeInTheDocument();
  //   expect(screen.getByText("Colour")).toBeInTheDocument();
  //   expect(screen.getByText("CO2 Emissions")).toBeInTheDocument();
  //   expect(screen.getByText("Nox Emissions")).toBeInTheDocument();
  //   expect(screen.getByText("Number Of Keys")).toBeInTheDocument();
  //   expect(screen.getByText("Car")).toBeInTheDocument();
  //   expect(screen.getByText("RED")).toBeInTheDocument();
  //   expect(screen.getByText("139 g/km")).toBeInTheDocument();
  //   expect(screen.getByText("230")).toBeInTheDocument();
  //   expect(screen.getByText("2")).toBeInTheDocument();
  // });
});
