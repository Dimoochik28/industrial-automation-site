import { screen } from "@testing-library/react";
import { About } from "../components/About";
import { renderWithRouter } from "../test/utils";

describe("About", () => {
  it("має заголовок і зображення з описовим alt", () => {
    renderWithRouter(<About />);
    expect(screen.getByRole("heading", { name: "Про нас" })).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAccessibleName(/\S/);
  });

  it("показує три факти", () => {
    renderWithRouter(<About />);
    expect(screen.getByText(/понад 3 роки/)).toBeInTheDocument();
    expect(screen.getByText(/кваліфікація/)).toBeInTheDocument();
    expect(screen.getByText(/Індивідуальний підхід/)).toBeInTheDocument();
  });
});