import { screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import App from "../App";
import { projects } from "../data/projects";
import { renderWithRouter } from "../test/utils";

describe("Головна сторінка", () => {
  it("усі внутрішні якорі ведуть до існуючих елементів", () => {
    const { container } = renderWithRouter(<App />);
    const anchors = [...container.querySelectorAll("a[href]")].filter((a) => {
      const href = a.getAttribute("href");
      return href.startsWith("#") || href.startsWith("/#");
    });

    expect(anchors.length).toBeGreaterThan(0);
    anchors.forEach((a) => {
      const id = a.getAttribute("href").split("#")[1];
      expect(container.querySelector(`#${CSS.escape(id)}`), `немає #${id}`).not.toBeNull();
    });
  });

  it("має рівно один h1 і один main", () => {
    const { container } = renderWithRouter(<App />);
    expect(container.querySelectorAll("h1")).toHaveLength(1);
    expect(container.querySelectorAll("main")).toHaveLength(1);
  });

  it("усі зображення мають атрибут alt", () => {
    const { container } = renderWithRouter(<App />);
    container.querySelectorAll("img").forEach((img) => {
      expect(img, img.outerHTML).toHaveAttribute("alt");
    });
  });

  it("id на сторінці унікальні й непорожні", () => {
    const { container } = renderWithRouter(<App />);
    const ids = [...container.querySelectorAll("[id]")].map((el) => el.id);

    expect(ids.every(Boolean)).toBe(true);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("зовнішні посилання з target=_blank мають rel=noopener", () => {
    const { container } = renderWithRouter(<App />);
    container.querySelectorAll('a[target="_blank"]').forEach((a) => {
      expect(a.getAttribute("rel")).toMatch(/noopener/);
    });
  });

  it("заголовок вкладки містить назву компанії", () => {
    renderWithRouter(<App />);
    expect(document.title).toContain("Промислова автоматизація");
  });
});

describe("Маршрути", () => {
  it("/portfolio показує сторінку з усіма проєктами", () => {
    const { container } = renderWithRouter(<App />, { route: "/portfolio" });

    expect(screen.getByRole("heading", { level: 1, name: "Наші роботи" })).toBeInTheDocument();
    expect(container.querySelectorAll("h1")).toHaveLength(1);
    expect(container.querySelectorAll(".project-grid > li")).toHaveLength(projects.length);
  });

  it("/portfolio має власний заголовок вкладки", () => {
    renderWithRouter(<App />, { route: "/portfolio" });
    expect(document.title).toBe("Наші роботи | Промислова автоматизація");
  });

  it("клік «Усі роботи» на головній відкриває портфоліо", async () => {
    renderWithRouter(<App />);
    fireEvent.click(screen.getByRole("link", { name: "Усі роботи" }));

    expect(
      await screen.findByRole("heading", { level: 1, name: "Наші роботи" })
    ).toBeInTheDocument();
  });

  it("невідомий шлях показує 404 з посиланням на головну", () => {
    renderWithRouter(<App />, { route: "/nonexistent" });

    expect(screen.getByRole("heading", { name: "Сторінку не знайдено" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "На головну" })).toHaveAttribute("href", "/");
  });
});