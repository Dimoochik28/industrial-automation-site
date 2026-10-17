import { render, screen, within } from "@testing-library/react";
import { Services } from "../components/Services";
import { services } from "../data/services";

describe("Services", () => {
  it("показує по картці на кожну послугу з даних", () => {
    render(<Services />);
    const section = screen.getByRole("region", { name: "Що ми пропонуємо" });

    expect(within(section).getAllByRole("listitem")).toHaveLength(services.length);
    services.forEach(({ title }) => {
      expect(within(section).getByRole("heading", { name: title })).toBeInTheDocument();
    });
  });

  it("кожна послуга має унікальний заголовок (він використовується як key)", () => {
    const titles = services.map((s) => s.title);
    expect(new Set(titles).size).toBe(titles.length);
  });
});