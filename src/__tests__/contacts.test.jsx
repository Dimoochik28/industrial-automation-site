import { CONTACTS } from "../data/contacts";

describe("Дані контактів", () => {
  it("цифри телефону збігаються з tel:-посиланням", () => {
    const digits = CONTACTS.phone.label.replace(/\D/g, "");
    expect(CONTACTS.phone.href).toBe(`tel:+${digits}`);
  });

  it("email має коректний формат", () => {
    expect(CONTACTS.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  // Цей тест навмисно впаде, доки в даних лишаються заглушки.
  it("у даних не залишилось заглушок перед здачею", () => {
    expect(JSON.stringify(CONTACTS)).not.toMatch(/USERNAME|123-45-67|1234567/);
  });
  
});