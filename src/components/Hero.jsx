import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";

export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-image">
        <img src={heroImage} alt="" fetchPriority="high" />
      </div>
      <div className="hero-content">
        <h1>Ремонт і модернізація промислового обладнання</h1>
        <p className="hero-tags">
          PLC • CNC • HMI • Електроприводи • Промислова електроніка
        </p>
        <p className="hero-lead">
          Не поспішайте замінювати обладнання. Спочатку знайдемо причину
          несправності.
        </p>
        <p className="hero-text">
          Діагностика, ремонт, відновлення та модернізація систем керування.
          Понад 40 років практичного досвіду в промисловій електроніці та ЧПК.
        </p>
        <div className="hero-actions">
          <Link to="/#contact" className="btn">Повідомити про несправність</Link>
          <Link to="/portfolio" className="btn btn-outline">Наші роботи</Link>
        </div>
      </div>
    </section>
  );
}