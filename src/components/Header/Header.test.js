import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Test Header Component", () => {
  test("Render title", () => {
    render(<Header />);
    expect(screen.getByText("Vehicle Showroom")).toBeInTheDocument();
  });

  test("Renders Github and Linkedin links", () => {
    render(<Header />);

    const githubLink = screen.getByRole("link", { name: /github logo/i });
    const linkedinLink = screen.getByRole("link", { name: /linkedin logo/i });

    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/TiagoOliveiraa"
    );
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/oliveirafilipetiago/"
    );
  });
});
