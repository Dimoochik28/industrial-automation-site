import { CONTACTS } from "../data/contacts";

export function Footer() {
  const { phone, email, telegram, viber, whatsapp, region, coverage } = CONTACTS;

  return (
    <footer className="footer">
      <div className="footer-grid">
        <h2 className="footer-title">Контакти</h2>

        <address className="footer-col">
          <p>
            Телефон: <a href={phone.href}>{phone.label}</a>
          </p>
          <p>
            Email: <a href={`mailto:${email}`}>{email}</a>
          </p>
        </address>

        <div className="footer-col">
          <p>{region}</p>
          <p className="footer-muted">{coverage}</p>
        </div>

        <div className="footer-col">
          <p>Промислова автоматизація</p>
          <p className="footer-muted">PLC / CNC</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Industrial Automation. Усі права захищено.</p>
      </div>
    </footer>
  );
}