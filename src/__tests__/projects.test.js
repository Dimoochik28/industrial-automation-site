import { projects } from "../data/projects";

describe("Дані проєктів", () => {
  it("список не порожній", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it("кожен проєкт має title, stack, summary, task, solution і result", () => {
    projects.forEach((p) => {
      ["title", "stack", "summary", "task", "solution", "result"].forEach((field) => {
        expect(p[field], `«${p.title}»: порожнє поле ${field}`).toBeTruthy();
      });
    });
  });

  it("короткий опис справді короткий (до 160 символів)", () => {
    projects.forEach((p) => {
      expect(p.summary.length, `«${p.title}»: summary задовгий`).toBeLessThanOrEqual(160);
    });
  });

  it("id унікальні й містять лише латиницю, цифри й дефіс", () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    ids.forEach((id) => expect(id).toMatch(/^[a-z0-9-]+$/));
  });

  it("заголовки проєктів унікальні", () => {
    const titles = projects.map((p) => p.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it("відео має src або youtubeId (одне з двох) і коректний формат", () => {
    projects
      .filter((p) => p.video)
      .forEach(({ title, video }) => {
        const { src, youtubeId } = video;

        expect(Boolean(src) !== Boolean(youtubeId), `«${title}»: потрібен рівно один із src або youtubeId`).toBe(true);
        if (src) expect(src, `«${title}»`).toMatch(/^\/videos\/.+\.(mp4|webm)$/);
        if (youtubeId) expect(youtubeId, `«${title}»`).toMatch(/^[\w-]{11}$/);
      });
  });
});