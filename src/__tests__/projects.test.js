import { projects } from "../data/projects";

describe("Дані проєктів", () => {
  it("список не порожній", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it("кожен проєкт має всі потрібні поля", () => {
    projects.forEach((project) => {
      ["title", "image", "stack", "task", "solution", "result"].forEach((field) => {
        expect(project[field], `«${project.title}»: порожнє поле ${field}`).toBeTruthy();
      });
    });
  });

  it("заголовки проєктів унікальні", () => {
    const titles = projects.map((p) => p.title);
    expect(new Set(titles).size).toBe(titles.length);
  });
});