import { render, screen } from "@testing-library/react";
import { About } from "../components/About";

describe("About", () => {
  it("має заголовок і зображення з описовим alt", () => {
    render(<About />);
    expect(screen.getByRole("heading", { name: "Про нас" })).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAccessibleName(/\S/);
  });

  it("показує три факти", () => {
    render(<About />);
    expect(screen.getByText(/понад 3 роки/)).toBeInTheDocument();
    expect(screen.getByText(/кваліфікація/)).toBeInTheDocument();
    expect(screen.getByText(/Індивідуальний підхід/)).toBeInTheDocument();
  });
});