import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Test Footer Component", () => {
  test("Render all details sent by prop", () => {
    render(<Footer/>);
    expect(screen.getByText("Tiago Oliveira @ 2025")).toBeInTheDocument();
  });
});