import { screen, within } from "@testing-library/react";
import { Services } from "../components/Services";
import { services } from "../data/services";
import { renderWithRouter } from "../test/utils";

describe("Services", () => {
  it("показує по картці на кожну послугу з даних", () => {
    renderWithRouter(<Services />);
    const section = screen.getByRole("region", { name: "Що ми пропонуємо" });

    expect(within(section).getAllByRole("listitem")).toHaveLength(services.length);
    services.forEach(({ title }) => {
      expect(within(section).getByRole("heading", { name: title })).toBeInTheDocument();
    });
  });
});