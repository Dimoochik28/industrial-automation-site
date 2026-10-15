// components/Services.jsx
import { services } from "../data/services";

export function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <span className="section-label">Наші послуги</span>
        <h2>Що ми пропонуємо</h2>
        <div className="services-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article key={title} className="card">
              <Icon size={32} color="var(--primary)" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}