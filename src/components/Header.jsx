import { useEffect, useRef, useState } from "react";
import { Settings, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#services", label: "Послуги" },
  { href: "#projects", label: "Наші роботи" },
  { href: "#about", label: "Про нас" },
  { href: "#contact", label: "Контакти" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  // Escape закриває меню й повертає фокус на кнопку
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="header">
      <a href="#hero" className="logo" aria-label="На початок сторінки">
        <Settings size={32} aria-hidden="true" />
        <span className="logo-text">
          <strong>Промислова автоматизація</strong>
          <span>PLC/CNC</span>
        </span>
      </a>

      <button
        ref={toggleRef}
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-nav"
        aria-label={open ? "Закрити меню" : "Відкрити меню"}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
      </button>

      <nav
        id="main-nav"
        className={`nav${open ? " is-open" : ""}`}
        aria-label="Головна навігація"
      >
        <ul>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a href="#contact" className="btn btn-sm header-cta">
        Зв’язатися
      </a>
    </header>
  );
}