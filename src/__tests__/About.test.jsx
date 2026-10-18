import { screen } from "@testing-library/react";
import { About } from "../components/About";
import { renderWithRouter } from "../test/utils";

describe("About", () => {
  it("має заголовок і зображення з описовим alt", () => {
    renderWithRouter(<About />);
    expect(screen.getByRole("heading", { name: "Про нас" })).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAccessibleName(/\S/);
  });

  it("показує ключові факти про досвід", () => {
    renderWithRouter(<About />);
    expect(screen.getByText(/Понад 40 років/)).toBeInTheDocument();
    expect(screen.getByText(/Незалежний інженерний бізнес з 2001 року/)).toBeInTheDocument();
    expect(screen.getByText(/без підтримки виробника/)).toBeInTheDocument();
  });
});