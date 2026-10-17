import { Settings } from "lucide-react";

const NAV_LINKS = [
  { href: "#services", label: "Послуги" },
  { href: "#projects", label: "Наші роботи" },
  { href: "#about", label: "Про нас" },
  { href: "#contact", label: "Контакти" },
];

export function Header() {
  return (
    <header className="header">
      <a href="#hero" className="logo" aria-label="На початок сторінки">
        <Settings size={32} aria-hidden="true" />
        <span className="logo-text">
          <strong>Промислова автоматизація</strong>
          <span>PLC/CNC</span>
        </span>
      </a>

      <nav className="nav" aria-label="Головна навігація">
        <ul>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <a href="#contact" className="btn btn-sm">
        Зв’язатися
      </a>
    </header>
  );
}