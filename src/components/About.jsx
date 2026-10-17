import { Clock, BadgeCheck, Users } from "lucide-react";
import working from "../assets/working.png";

const FACTS = [
  { icon: Clock, text: "Досвід роботи понад 3 роки" },
  { icon: BadgeCheck, text: "Висока кваліфікація спеціалістів" },
  { icon: Users, text: "Індивідуальний підхід до кожного клієнта" },
];

export function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <img src={working} alt="Інженер за ремонтом промислового обладнання" loading="lazy" />

      <div className="about-text">
        <h2 id="about-title">Про нас</h2>
        <p>
          Ми спеціалізуємося на ремонті та модернізації промислового обладнання,
          включаючи PLC, CNC, HMI, сервоприводи та частотні перетворювачі. Наша
          команда досвідчених інженерів забезпечує високоякісні рішення для
          підвищення продуктивності та ефективності вашого виробництва.
        </p>

        <ul className="about-facts">
          {FACTS.map(({ icon: Icon, text }) => (
            <li key={text} className="fact">
              <Icon size={28} aria-hidden="true" />
              <h3>{text}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}