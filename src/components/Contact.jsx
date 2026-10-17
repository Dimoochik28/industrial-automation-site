import { FaTelegram, FaViber, FaWhatsapp } from "react-icons/fa6";
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
           target="_blank" rel="noopener noreferrer"><FaTelegram size={18} aria-hidden="true" /> Telegram
          <span className="visually-hidden"> (відкриється в новій вкладці)</span>   
        </a>
        <a className="btn btn-outline" href={viber.href}
           target="_blank" rel="noopener noreferrer"><FaViber size={18} aria-hidden="true" /> Viber
          <span className="visually-hidden"> (відкриється в новій вкладці)</span> 
       </a>
        <a className="btn btn-outline" href={whatsapp.href}
           target="_blank" rel="noopener noreferrer"><FaWhatsapp size={18} aria-hidden="true" /> WhatsApp
          <span className="visually-hidden"> (відкриється в новій вкладці)</span>
        </a>      
      </div>
    </section>
  );
}