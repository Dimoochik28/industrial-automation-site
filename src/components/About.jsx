import working from "../assets/working.png";

export function About() {
  return(
    <section id="about" className="about">
      <img src={working} alt="Working" />
      <div>
        <h2>Про нас</h2>
        <p className="about-text" >Ми спеціалізуємося на ремонті та модернізації промислового обладнання, включаючи PLC, CNC, HMI, сервоприводи та частотні перетворювачі. Наша команда досвідчених інженерів забезпечує високоякісні рішення для підвищення продуктивності та ефективності вашого виробництва.</p>
        <div className="about-facts">
          <div className="fact">
            <h3>Досвід роботи понад 3 роки</h3>
          </div>
          <div className="fact">
            <h3>Висока кваліфікація спеціалістів</h3>
          </div>
          <div className="fact">
            <h3>Індивідуальний підхід до кожного клієнта</h3>
          </div>
        </div>
      </div>
    </section>
  )
}