import { screen } from "@testing-library/react";
import { Footer } from "../components/Footer";
import { CONTACTS } from "../data/contacts";
import { renderWithRouter } from "../test/utils";

describe("Footer", () => {
  beforeEach(() => {
    renderWithRouter(<Footer />);
  });

  it("телефон і email клікабельні", () => {
    expect(screen.getByRole("link", { name: CONTACTS.phone.label })).toHaveAttribute("href", CONTACTS.phone.href);
    expect(screen.getByRole("link", { name: CONTACTS.email })).toHaveAttribute("href", `mailto:${CONTACTS.email}`);
  });

  it("показує поточний рік", () => {
    expect(screen.getByText(new RegExp(`©\\s*${new Date().getFullYear()}`))).toBeInTheDocument();
  });

  it("не має порожнього id", () => {
    expect(document.querySelector('[id=""]')).toBeNull();
  });
});