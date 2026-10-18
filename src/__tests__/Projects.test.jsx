import { screen, within } from "@testing-library/react";
import { Projects } from "../components/Projects";
import { projects } from "../data/projects";
import { renderWithRouter } from "../test/utils";

const PREVIEW_COUNT = 3;

describe("Projects (превʼю на головній)", () => {
  it("показує не більше трьох проєктів", () => {
    renderWithRouter(<Projects />);
    const section = screen.getByRole("region", { name: "Виконані проєкти" });

    expect(within(section).getAllByRole("listitem")).toHaveLength(
      Math.min(projects.length, PREVIEW_COUNT)
    );
  });

  it("показує перші проєкти з даних із заголовком і фото", () => {
    renderWithRouter(<Projects />);
    projects.slice(0, PREVIEW_COUNT).forEach(({ title }) => {
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
      expect(screen.getByRole("img", { name: title })).toBeInTheDocument();
    });
  });

  it("є посилання «Усі роботи» на сторінку портфоліо", () => {
    renderWithRouter(<Projects />);
    expect(screen.getByRole("link", { name: "Усі роботи" })).toHaveAttribute(
      "href",
      "/portfolio"
    );
  });
});