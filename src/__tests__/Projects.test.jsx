import { render, screen, within } from "@testing-library/react";
import { Projects } from "../components/Projects";
import { projects } from "../data/projects";

describe("Projects", () => {
  it("показує всі проєкти з даних", () => {
    render(<Projects />);
    const section = screen.getByRole("region", { name: "Виконані проєкти" });

    expect(within(section).getAllByRole("listitem")).toHaveLength(projects.length);
  });

  it("кожне фото має alt, а кожен проєкт заголовок", () => {
    render(<Projects />);
    projects.forEach(({ title }) => {
      expect(screen.getByRole("img", { name: title })).toBeInTheDocument();
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
    });
  });
});