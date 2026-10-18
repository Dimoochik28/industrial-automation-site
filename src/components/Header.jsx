import { useEffect, useRef, useState } from "react";
import { Settings, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const NAV_LINKS = [
  { to: "/#services", label: "Послуги" },
  { to: "/portfolio", label: "Наші роботи", page: true },
  { to: "/#about", label: "Про нас" },
  { to: "/#contact", label: "Контакти" },
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
      <Link to="/" className="logo" aria-label="На початок сторінки" arial-label="На початок сторінки">
        <Settings size={32} aria-hidden="true" />
        <span className="logo-text">
          <strong>Промислова автоматизація</strong>
          <span>PLC/CNC</span>
        </span>
      </Link>

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
          {NAV_LINKS.map(({ to, label, page }) => {
            const LinkComponent = page ? NavLink : Link;
            return (
              <li key={to}>
                <LinkComponent to={to} onClick={() => setOpen(false)}>
                  {label}
                </LinkComponent>
              </li>
            );
          })}
        </ul>
      </nav>

      <Link to="/#contact" className="btn btn-sm header-cta">
        Зв’язатися
      </Link>
    </header>
  );
}