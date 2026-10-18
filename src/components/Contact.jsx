import { FaTelegram, FaViber, FaWhatsapp } from "react-icons/fa6";
import { CONTACTS } from "../data/contacts";

export function Contact() {
  const { phone, email, telegram, viber, whatsapp } = CONTACTS;

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <span className="section-label">Контакти</span>
      <h2 id="contact-title">Повідомити про несправність</h2>
      <p className="section-sub">
        Зателефонуйте або напишіть у месенджер: коротко опишіть, що за обладнання і що
        сталося. Вартість визначається після оцінки задачі.
      </p>

      <div className="hero-actions">
        <a className="btn" href={phone.href}>Зателефонувати</a>
        <a className="btn btn-outline" href={`mailto:${email}`}>Email</a>
        <a className="btn btn-outline" href={telegram.href}
           target="_blank" rel="noopener noreferrer"><FaTelegram size={18} aria-hidden="true" /> Telegram
          <span className="visually-hidden"> (відкриється в новій вкладці)</span>   
        </a>
        <a className="btn btn-outline btn-icon" href={viber.href}>
          <FaViber size={18} aria-hidden="true" />
          Viber
        </a>
        <a className="btn btn-outline" href={whatsapp.href}
           target="_blank" rel="noopener noreferrer"><FaWhatsapp size={18} aria-hidden="true" /> WhatsApp
          <span className="visually-hidden"> (відкриється в новій вкладці)</span>
        </a>      
      </div>
    </section>
  );
}