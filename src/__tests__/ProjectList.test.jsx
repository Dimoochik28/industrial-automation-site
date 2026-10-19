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

  it("кожна картка має id для переходу за посиланням", () => {
    const { container } = renderWithRouter(<ProjectList items={items} />);
    expect(container.querySelector("#a")).toBeInTheDocument();
    expect(container.querySelector("#b")).toBeInTheDocument();
  });

  it("показує ключові цифри й статус, якщо вони є", () => {
    const withExtras = [
      { id: "x", title: "Проєкт X", task: "Т", solution: "Р", result: "Рез", stack: "PLC",
        highlights: ["5 PLC", "4 енкодери"], status: "У роботі" },
    ];
    renderWithRouter(<ProjectList items={withExtras} />);

    expect(screen.getByText("5 PLC")).toBeInTheDocument();
    expect(screen.getByText("4 енкодери")).toBeInTheDocument();
    expect(screen.getByText("У роботі")).toBeInTheDocument();
  });

  it("проєкт без фото не ламає картку", () => {
    const noImage = [{ id: "n", title: "Без фото", task: "Т", solution: "Р", result: "Рез", stack: "CNC" }];
    renderWithRouter(<ProjectList items={noImage} />);

    expect(screen.getByRole("heading", { name: "Без фото" })).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("не падає без пропса items", () => {
    renderWithRouter(<ProjectList />);
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });
  
  it("для проєкту з відео показує кнопку відтворення", () => {
    const withVideo = [
      { id: "v", title: "Проєкт V", image: "/v.png", task: "Т", solution: "Р", result: "Рез",
        stack: "CNC", video: { src: "/videos/v.mp4" } },
    ];
    renderWithRouter(<ProjectList items={withVideo} />);

    expect(screen.getByRole("button", { name: "Дивитися відео: Проєкт V" })).toBeInTheDocument();
  });

  it("проєкт без відео не має кнопки відтворення", () => {
    renderWithRouter(<ProjectList items={items} />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});