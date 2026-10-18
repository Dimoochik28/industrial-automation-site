import { screen, within, fireEvent } from "@testing-library/react";
import { Header } from "../components/Header";
import { renderWithRouter } from "../test/utils";

describe("Header", () => {
  it("має навігацію з посиланнями на секції й сторінку портфоліо", () => {
    renderWithRouter(<Header />);
    const nav = screen.getByRole("navigation", { name: "Головна навігація" });
    const hrefs = within(nav)
      .getAllByRole("link")
      .map((a) => a.getAttribute("href"));

    expect(hrefs).toEqual(["/#services", "/portfolio", "/#about", "/#contact"]);
  });

  it("логотип веде на головну", () => {
    renderWithRouter(<Header />);
    expect(
      screen.getByRole("link", { name: "На початок сторінки" })
    ).toHaveAttribute("href", "/");
  });

  it("кнопка «Зв'язатися» веде на #contact", () => {
    renderWithRouter(<Header />);
    const nav = screen.getByRole("navigation");
    const cta = screen
      .getAllByRole("link", { name: /Зв.язатися/ })
      .find((a) => !nav.contains(a));

    expect(cta).toHaveAttribute("href", "/#contact");
  });

  it("на сторінці портфоліо активний пункт «Наші роботи»", () => {
    renderWithRouter(<Header />, { route: "/portfolio" });
    expect(screen.getByRole("link", { name: "Наші роботи" })).toHaveAttribute(
      "aria-current",
      "page"
    );
  });

  it("на головній пункт «Наші роботи» не активний", () => {
    renderWithRouter(<Header />);
    expect(screen.getByRole("link", { name: "Наші роботи" })).not.toHaveAttribute(
      "aria-current"
    );
  });
});

describe("Header: бургер-меню", () => {
  it("за замовчуванням меню закрите", () => {
    renderWithRouter(<Header />);
    const toggle = screen.getByRole("button", { name: "Відкрити меню" });

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveAttribute("aria-controls", "main-nav");
    expect(document.getElementById("main-nav")).not.toHaveClass("is-open");
  });

  it("клік відкриває й закриває меню", () => {
    renderWithRouter(<Header />);
    const toggle = screen.getByRole("button", { name: "Відкрити меню" });

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(toggle).toHaveAccessibleName("Закрити меню");
    expect(document.getElementById("main-nav")).toHaveClass("is-open");

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(document.getElementById("main-nav")).not.toHaveClass("is-open");
  });

  it("клік по пункту меню закриває його", () => {
    renderWithRouter(<Header />);
    fireEvent.click(screen.getByRole("button", { name: "Відкрити меню" }));
    fireEvent.click(screen.getByRole("link", { name: "Про нас" }));

    expect(document.getElementById("main-nav")).not.toHaveClass("is-open");
  });

  it("Escape закриває меню й повертає фокус на кнопку", () => {
    renderWithRouter(<Header />);
    const toggle = screen.getByRole("button", { name: "Відкрити меню" });

    fireEvent.click(toggle);
    fireEvent.keyDown(document, { key: "Escape" });

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveFocus();
  });
});