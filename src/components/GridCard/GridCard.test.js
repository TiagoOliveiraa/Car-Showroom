import { render, screen } from "@testing-library/react";
import { GridCard } from "./GridCard";

const equipment = {
  0: "Air Conditioning",
  1: "Tyre Inflation Kit",
  3: "Photocopy of V5 Present",
  4: "Navigation HDD",
  5: "17 Alloy Wheels",
  6: "Engine Mods/Upgrades",
  7: "Modifd/Added Body Parts",
};

describe("Test Grid Card Component", () => {
  test("Render title sent by prop", () => {
    render(<GridCard title="Car Equipment" equipment={equipment}/>);
    expect(screen.getByText("Car Equipment")).toBeInTheDocument();
  });

  // test("Render all equipment sent by prop", () => {
  //   render(
  //     <GridCard title="Car Equipment" equipment={equipment} />
  //   );
  //   expect(screen.getByText("Air Conditioning")).toBeInTheDocument();
  //   expect(screen.getByText("Tyre Inflation Kit")).toBeInTheDocument();
  //   expect(screen.getByText("Photocopy of V5 Present")).toBeInTheDocument();
  //   expect(screen.getByText("Navigation HDD")).toBeInTheDocument();
  //   expect(screen.getByText("17 Alloy Wheels")).toBeInTheDocument();
  //   expect(screen.getByText("Engine Mods/Upgrades")).toBeInTheDocument();
  //   expect(screen.getByText("Modifd/Added Body Parts")).toBeInTheDocument();
  // });
});
