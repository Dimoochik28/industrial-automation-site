import "@testing-library/jest-dom/vitest";
import { vi, afterEach } from "vitest";

// jsdom не вміє скролити, тому підміняємо ці методи заглушками
window.scrollTo = vi.fn();
Element.prototype.scrollIntoView = vi.fn();

// між тестами скидаємо лічильники викликів заглушок
afterEach(() => {
  vi.clearAllMocks();
});