import { render, screen } from "@testing-library/react";
import { Hero } from "../components/Hero";

describe("Hero", () => {
  it("має один заголовок h1", () => {
    render(<Hero />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("кнопки ведуть на потрібні секції", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /Наші роботи/ })).toHaveAttribute("href", "#projects");
    expect(screen.getByRole("link", { name: /Зв.язатися/ })).toHaveAttribute("href", "#contact");
  });
});