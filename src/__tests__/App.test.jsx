import { screen, fireEvent } from "@testing-library/react";
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

  it("заголовок вкладки містить назву компанії", () => {
    renderWithRouter(<App />);
    expect(document.title).toContain("Промислова автоматизація");
  });

  it("клік «Усі роботи» відкриває портфоліо", async () => {
    renderWithRouter(<App />);
    fireEvent.click(screen.getByRole("link", { name: "Усі роботи" }));

    expect(
      await screen.findByRole("heading", { level: 1, name: "Наші роботи" })
    ).toBeInTheDocument();
  });
});

describe("Портфоліо", () => {
  it("/portfolio показує всі проєкти", () => {
    const { container } = renderWithRouter(<App />, { route: "/portfolio" });

    expect(screen.getByRole("heading", { level: 1, name: "Наші роботи" })).toBeInTheDocument();
    expect(container.querySelectorAll(".project-grid > li")).toHaveLength(projects.length);
  });

  it("/portfolio має власний заголовок вкладки", () => {
    renderWithRouter(<App />, { route: "/portfolio" });
    expect(document.title).toBe("Наші роботи | Промислова автоматизація");
  });

  it("кожен проєкт має на сторінці id, на який ведуть посилання «Детальніше»", () => {
    const { container } = renderWithRouter(<App />, { route: "/portfolio" });

    projects.forEach(({ id }) => {
      expect(container.querySelector(`#${CSS.escape(id)}`), `немає #${id}`).not.toBeNull();
    });
  });

  it("перехід за /portfolio#id прокручує до проєкту", () => {
    renderWithRouter(<App />, { route: `/portfolio#${projects[0].id}` });
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
  });
});

describe("Усі сторінки", () => {
  // it.each запускає один і той самий тест для кожного маршруту зі списку
  it.each(["/", "/portfolio"])("%s: один h1 і один main", (route) => {
    const { container } = renderWithRouter(<App />, { route });
    expect(container.querySelectorAll("h1")).toHaveLength(1);
    expect(container.querySelectorAll("main")).toHaveLength(1);
  });

  it.each(["/", "/portfolio"])("%s: id унікальні й непорожні", (route) => {
    const { container } = renderWithRouter(<App />, { route });
    const ids = [...container.querySelectorAll("[id]")].map((el) => el.id);

    expect(ids.every(Boolean)).toBe(true);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it.each(["/", "/portfolio"])("%s: усі зображення мають alt", (route) => {
    const { container } = renderWithRouter(<App />, { route });
    container.querySelectorAll("img").forEach((img) => {
      expect(img, img.outerHTML).toHaveAttribute("alt");
    });
  });

  it.each(["/", "/portfolio"])("%s: посилання з target=_blank мають rel=noopener", (route) => {
    const { container } = renderWithRouter(<App />, { route });
    container.querySelectorAll('a[target="_blank"]').forEach((a) => {
      expect(a.getAttribute("rel")).toMatch(/noopener/);
    });
  });

  it("невідомий шлях показує 404 з посиланням на головну", () => {
    renderWithRouter(<App />, { route: "/nonexistent" });

    expect(screen.getByRole("heading", { name: "Сторінку не знайдено" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "На головну" })).toHaveAttribute("href", "/");
  });
});