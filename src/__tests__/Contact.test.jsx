import { screen } from "@testing-library/react";
import { Contact } from "../components/Contact";
import { CONTACTS } from "../data/contacts";
import { renderWithRouter } from "../test/utils";

describe("Contact", () => {
  beforeEach(() => {
    renderWithRouter(<Contact />);
  });

  it("є ціллю якоря #contact", () => {
    expect(document.getElementById("contact")).toBeInTheDocument();
  });

  it("має п'ять способів звʼязку", () => {
    expect(screen.getAllByRole("link")).toHaveLength(5);
  });

  it("телефон і email мають правильні href", () => {
    expect(screen.getByRole("link", { name: /Зателефонувати/ })).toHaveAttribute("href", CONTACTS.phone.href);
    expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute("href", `mailto:${CONTACTS.email}`);
  });

  it("Telegram відкривається безпечно в новій вкладці", () => {
    const link = screen.getByRole("link", { name: /Telegram/ });
    expect(link).toHaveAttribute("href", CONTACTS.telegram.href);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link.getAttribute("rel")).toMatch(/noopener/);
  });

  it("WhatsApp відкривається безпечно в новій вкладці", () => {
    const link = screen.getByRole("link", { name: /WhatsApp/ });
    expect(link).toHaveAttribute("href", CONTACTS.whatsapp.href);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link.getAttribute("rel")).toMatch(/noopener/);
  });

  it("Viber має правильне посилання", () => {
    expect(screen.getByRole("link", { name: /Viber/ })).toHaveAttribute("href", CONTACTS.viber.href);
  });
});