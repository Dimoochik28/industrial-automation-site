import { screen, within } from "@testing-library/react";
import { Projects } from "../components/Projects";
import { projects } from "../data/projects";
import { renderWithRouter } from "../test/utils";

const PREVIEW_COUNT = 3;
const shown = projects.slice(0, PREVIEW_COUNT);

describe("Projects (превʼю на головній)", () => {
  it("показує не більше трьох проєктів", () => {
    renderWithRouter(<Projects />);
    const section = screen.getByRole("region", { name: "Виконані проєкти" });

    expect(within(section).getAllByRole("listitem")).toHaveLength(shown.length);
  });

  it("показує заголовок і короткий опис кожного проєкту", () => {
    renderWithRouter(<Projects />);
    shown.forEach(({ title, summary }) => {
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
      expect(screen.getByText(summary)).toBeInTheDocument();
    });
  });

  it("не показує деталі кейсу: вони лише на сторінці портфоліо", () => {
    renderWithRouter(<Projects />);
    expect(screen.queryByText("Задача")).not.toBeInTheDocument();
    expect(screen.queryByText("Рішення")).not.toBeInTheDocument();
    expect(screen.queryByText("Результат")).not.toBeInTheDocument();
  });

  it("«Детальніше» веде до потрібного проєкту на сторінці портфоліо", () => {
    renderWithRouter(<Projects />);
    const links = screen.getAllByRole("link", { name: /Детальніше/ });

    expect(links).toHaveLength(shown.length);
    links.forEach((link, i) => {
      expect(link).toHaveAttribute("href", `/portfolio#${shown[i].id}`);
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