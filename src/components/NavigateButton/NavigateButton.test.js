import { render, screen } from "@testing-library/react";
import { NavigateButton } from "./NavigateButton";
import userEvent from "@testing-library/user-event";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

describe("Test Navigate Button Component", () => {
  test("Render text sent by prop", () => {
    render(<NavigateButton buttonText="Go Back" />);
    expect(screen.getByText("Go Back")).toBeInTheDocument();
  });

  test("Navigate to place sent by prop", () => {
    render(<NavigateButton navigate="/" buttonText="Go Back"/>);
    const button = screen.getByText("Go Back");
    userEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
