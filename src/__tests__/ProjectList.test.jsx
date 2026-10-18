import { screen, within } from "@testing-library/react";
import { ProjectList } from "../components/ProjectList";
import { renderWithRouter } from "../test/utils";

const items = [
  { id: "a", image: "/a.png", title: "Проєкт А", task: "Задача А", solution: "Рішення А", result: "Результат А", stack: "PLC" },
  { id: "b", image: "/b.png", title: "Проєкт Б", task: "Задача Б", solution: "Рішення Б", result: "Результат Б", stack: "CNC" },
];

describe("ProjectList", () => {
  it("показує картку на кожен елемент", () => {
    renderWithRouter(<ProjectList items={items} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  it("в картці є заголовок, фото й блоки «Задача / Рішення / Результат»", () => {
    renderWithRouter(<ProjectList items={items} />);
    const [first] = screen.getAllByRole("listitem");

    expect(within(first).getByRole("heading", { name: "Проєкт А" })).toBeInTheDocument();
    expect(within(first).getByRole("img", { name: "Проєкт А" })).toBeInTheDocument();
    expect(within(first).getByText("Задача А")).toBeInTheDocument();
    expect(within(first).getByText("Рішення А")).toBeInTheDocument();
    expect(within(first).getByText("Результат А")).toBeInTheDocument();
    expect(within(first).getByText("PLC")).toBeInTheDocument();
  });

  it("не падає без пропса items", () => {
    renderWithRouter(<ProjectList />);
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });
});