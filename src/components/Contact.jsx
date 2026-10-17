import { CONTACTS } from "../data/contacts";

export function Contact() {
  const { phone, email, telegram, viber, whatsapp } = CONTACTS;

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <span className="section-label">Контакти</span>
      <h2 id="contact-title">Обговорити модернізацію</h2>
      <p className="section-sub">Опишіть задачу, і ми запропонуємо рішення.</p>

      <div className="hero-actions">
        <a className="btn" href={phone.href}>Зателефонувати</a>
        <a className="btn btn-outline" href={`mailto:${email}`}>Email</a>
        <a className="btn btn-outline" href={telegram.href}
           target="_blank" rel="noopener noreferrer">Telegram</a>
        <a className="btn btn-outline" href={viber.href}
           target="_blank" rel="noopener noreferrer">Viber</a>
        <a className="btn btn-outline" href={whatsapp.href}
           target="_blank" rel="noopener noreferrer">WhatsApp</a>      
      </div>
    </section>
  );
}