import { render, screen } from "@testing-library/react";
import { ShowRoom } from "./ShowRoom";
import { store } from "../../store/store";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

describe("Test Show Room Component", () => {
  test("Render cars and pagination text", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ShowRoom />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText("Toyota C-HR")).toBeInTheDocument();
    expect(screen.getByText("Ford Fiesta")).toBeInTheDocument();
    expect(screen.getByText("Page 1 of 100")).toBeInTheDocument();
  });

  test("Change order by value", () => {
    render(
        <Provider store={store}>
          <MemoryRouter>
            <ShowRoom />
          </MemoryRouter>
        </Provider>
      );

    expect(screen.getByText("Toyota C-HR")).toBeInTheDocument();
    const orderBy = screen.getByTestId("orderSelect")
    userEvent.selectOptions(orderBy, "make");
    expect(screen.queryByText("Toyota C-HR")).not.toBeInTheDocument();
    expect(screen.getByText("Audi A3")).toBeInTheDocument();
  })

  test("Change cars per page and check number of pages", () => {
    render(
        <Provider store={store}>
          <MemoryRouter>
            <ShowRoom />
          </MemoryRouter>
        </Provider>
      );

    const select = screen.getByTestId("quantitySelect")
    userEvent.selectOptions(select,"50");

    expect(screen.getByText("Page 1 of 10")).toBeInTheDocument();
  })

  test("Change page by clicking on button", () => {
    render(
        <Provider store={store}>
          <MemoryRouter>
            <ShowRoom />
          </MemoryRouter>
        </Provider>
      );

    const button = screen.getByTestId("nextButton")
    userEvent.click(button);

    expect(screen.getByTestId("paginationSpan").innerHTML).toBe("Page 2 of 10");
  })
});
