import { CONTACTS } from "../data/contacts";

describe("Дані контактів", () => {
  const digits = CONTACTS.phone.label.replace(/\D/g, "");

  it("номер у tel:-посиланні збігається з показаним", () => {
    expect(CONTACTS.phone.href).toBe(`tel:+${digits}`);
  });

  it("Viber і WhatsApp ведуть на той самий номер", () => {
    expect(CONTACTS.viber.href).toBe(`viber://chat?number=%2B${digits}`);
    expect(CONTACTS.whatsapp.href).toBe(`https://wa.me/${digits}`);
  });

  it("email має коректний формат", () => {
    expect(CONTACTS.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it("у даних не залишилось заглушок перед здачею", () => {
    expect(JSON.stringify(CONTACTS)).not.toMatch(/USERNAME|123-45-67|1234567/);
  });
});