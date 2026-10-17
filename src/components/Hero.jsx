import heroImage from "../assets/hero.png";

export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-image">
        <img src={heroImage} alt="" fetchpriority="high" />
      </div>
      <div className="hero-content">
        <h1>Ремонт та модернізація промислового обладнання</h1>
        <p>
          PLC, CNC, HMI, сервоприводи, частотні перетворювачі. Діагностика,
          розробка та впровадження систем керування.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn">Наші роботи</a>
          <a href="#contact" className="btn btn-outline">Зв’язатися</a>
        </div>
      </div>
    </section>
  );
}