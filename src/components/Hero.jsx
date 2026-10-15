

export function Hero() {
  return(
    <section id="hero" className="hero">
      <div className="hero-image">
        <img src="/src/assets/hero.png" alt="Hero" />
      </div>
      <div className="hero-content">
        <h1>Ремонт та модернізація промислового обладнання</h1>
        <p>PLC, CNC, HMI, сервоприводи, частотні перетворювачі.
          Діагностика, розробка та впровадження систем керування.
        </p>
        <button>Наші роботи</button>
        <button>Зв'язатися</button>
      </div>
    </section>
  )
}
