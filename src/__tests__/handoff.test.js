import { CONTACTS } from "../data/contacts";
import { projects } from "../data/projects";

// Ці тести навмисно червоні, доки сайт не готовий до здачі.
// Коли вони всі зелені, заглушок і недописаних місць не лишилось.
describe("Перед здачею клієнту", () => {
  it("у контактах немає заглушок", () => {
    expect(JSON.stringify(CONTACTS)).not.toMatch(
      /USERNAME|123-45-67|1234567|industrial-automation\.com/
    );
  });

  it("у проєктах не лишилось позначок УТОЧНИТИ", () => {
    expect(JSON.stringify(projects)).not.toMatch(/УТОЧНИТИ/);
  });

  it("кожен проєкт має реальне фото", () => {
    projects.forEach((p) => {
      expect(p.image, `«${p.title}»: немає фото`).toBeTruthy();
    });
  });
});