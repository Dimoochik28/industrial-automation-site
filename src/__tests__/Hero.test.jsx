import { screen } from "@testing-library/react";
import { Hero } from "../components/Hero";
import { renderWithRouter } from "../test/utils";

describe("Hero", () => {
  it("має один заголовок h1", () => {
    renderWithRouter(<Hero />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("кнопка «Наші роботи» веде на сторінку портфоліо", () => {
    renderWithRouter(<Hero />);
    expect(screen.getByRole("link", { name: /Наші роботи/ })).toHaveAttribute(
      "href",
      "/portfolio"
    );
  });

  it("кнопка «Зв'язатися» веде на #contact", () => {
    renderWithRouter(<Hero />);
    expect(screen.getByRole("link", { name: /Зв.язатися/ })).toHaveAttribute(
      "href",
      "/#contact"
    );
  });
});