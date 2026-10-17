import { render } from "@testing-library/react";
import App from "../App";

describe("Сторінка в цілому", () => {
  it("усі внутрішні якорі ведуть до існуючих елементів", () => {
    const { container } = render(<App />);
    const anchors = [...container.querySelectorAll('a[href^="#"]')];

    expect(anchors.length).toBeGreaterThan(0);
    anchors.forEach((a) => {
      const id = a.getAttribute("href").slice(1);
      expect(container.querySelector(`#${CSS.escape(id)}`), `немає #${id}`).not.toBeNull();
    });
  });

  it("має рівно один h1 і структуру main", () => {
    const { container } = render(<App />);
    expect(container.querySelectorAll("h1")).toHaveLength(1);
    expect(container.querySelectorAll("main")).toHaveLength(1);
  });

  it("усі зображення мають атрибут alt", () => {
    const { container } = render(<App />);
    container.querySelectorAll("img").forEach((img) => {
      expect(img, img.outerHTML).toHaveAttribute("alt");
    });
  });

  it("id на сторінці унікальні й непорожні", () => {
    const { container } = render(<App />);
    const ids = [...container.querySelectorAll("[id]")].map((el) => el.id);

    expect(ids.every(Boolean)).toBe(true);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("зовнішні посилання з target=_blank мають rel=noopener", () => {
    const { container } = render(<App />);
    container.querySelectorAll('a[target="_blank"]').forEach((a) => {
      expect(a.getAttribute("rel")).toMatch(/noopener/);
    });
  });
});