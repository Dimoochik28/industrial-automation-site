import {
  Search, CircuitBoard, RefreshCw, SlidersHorizontal, Cpu, Factory, Puzzle,
} from "lucide-react";

export const services = [
  { id: "diagnostics", icon: Search, title: "Діагностика несправностей",
    text: "Пошук причини зупинки обладнання: PLC, аналогові сигнали, міжблокування, електричні кола." },
  { id: "repair", icon: CircuitBoard, title: "Ремонт промислової електроніки",
    text: "Ремонт електроніки та систем керування, зокрема на компонентному рівні." },
  { id: "modernization", icon: RefreshCw, title: "Відновлення й модернізація",
    text: "Модернізація PLC, CNC та HMI там, де це технічно й економічно доцільно." },
  { id: "drives", icon: SlidersHorizontal, title: "Приводи й енкодери",
    text: "Налагодження сервоприводів, частотних перетворювачів та енкодерів." },
  { id: "plc", icon: Cpu, title: "Програмування PLC та HMI",
    text: "Програми керування та інтерфейси оператора для верстатів і ліній." },
  { id: "commissioning", icon: Factory, title: "Пусконалагодження",
    text: "Запуск верстатів, технологічних ліній і роботизованого обладнання." },
  { id: "custom", icon: Puzzle, title: "Нестандартні рішення",
    text: "Розроблення власних технічних рішень під конкретну задачу." },
];