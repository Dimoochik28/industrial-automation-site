import { services } from "../data/services";

export function Services() {
  return (
    <section id="services" className="services" aria-labelledby="services-title">
      <span className="section-label">Наші послуги</span>
      <h2 id="services-title">Що ми пропонуємо</h2>
      <p className="section-sub">
        Повний цикл робіт: від діагностики до запуску в роботу.
      </p>

      <ul className="services-grid">
        {services.map(({ icon: Icon, title, text }) => (
          <li key={title} className="card">
            <Icon className="card-icon" size={32} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}