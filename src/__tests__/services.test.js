import { services } from "../data/services";

describe("Дані послуг", () => {
  it("список не порожній", () => {
    expect(services.length).toBeGreaterThan(0);
  });

  it("кожна послуга має іконку, заголовок і текст", () => {
    services.forEach((service) => {
      ["icon", "title", "text"].forEach((field) => {
        expect(service[field], `«${service.title}»: порожнє поле ${field}`).toBeTruthy();
      });
    });
  });

  it("заголовки послуг унікальні", () => {
    const titles = services.map((s) => s.title);
    expect(new Set(titles).size).toBe(titles.length);
  });
});