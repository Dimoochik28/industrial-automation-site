import { render, screen, within, fireEvent } from "@testing-library/react";

describe("Header: бургер-меню", () => {
  it("кнопка меню за замовчуванням закрита", () => {
    render(<Header />);
    const toggle = screen.getByRole("button", { name: "Відкрити меню" });

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveAttribute("aria-controls", "main-nav");
    expect(document.getElementById("main-nav")).not.toHaveClass("is-open");
  });

  it("клік відкриває й закриває меню", () => {
    render(<Header />);
    const toggle = screen.getByRole("button", { name: "Відкрити меню" });

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(toggle).toHaveAccessibleName("Закрити меню");
    expect(document.getElementById("main-nav")).toHaveClass("is-open");

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("клік по пункту меню закриває його", () => {
    render(<Header />);
    fireEvent.click(screen.getByRole("button", { name: "Відкрити меню" }));
    fireEvent.click(screen.getByRole("link", { name: "Про нас" }));

    expect(document.getElementById("main-nav")).not.toHaveClass("is-open");
  });

  it("Escape закриває меню", () => {
    render(<Header />);
    const toggle = screen.getByRole("button", { name: "Відкрити меню" });

    fireEvent.click(toggle);
    fireEvent.keyDown(document, { key: "Escape" });

    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});