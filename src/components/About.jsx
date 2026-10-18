import { Clock, BadgeCheck, Wrench } from "lucide-react";
import working from "../assets/working.png";

const FACTS = [
  { icon: Clock, text: "Понад 40 років практичного досвіду" },
  { icon: BadgeCheck, text: "Незалежний інженерний бізнес з 2001 року" },
  { icon: Wrench, text: "Працюємо і зі старим обладнанням без підтримки виробника" },
];

export function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <img src={working} alt="Інженер за ремонтом промислового обладнання" loading="lazy" />

      <div className="about-text">
        <h2 id="about-title">Про нас</h2>
        <p>
          Наш досвід у промисловій електроніці та системах ЧПК розпочався ще у 1985
          році. З 2001 року працюємо як незалежний інженерний бізнес. Спеціалізуємося
          на пошуку складних несправностей, ремонті електроніки, відновленні та
          модернізації систем керування верстатів і технологічних ліній. Працюємо як
          із сучасним обладнанням, так і з машинами, виробники яких давно припинили
          технічну підтримку. Наш принцип: не ускладнювати обладнання без потреби, а
          забезпечити його надійну, стабільну та зрозумілу роботу.
        </p>

        <ul className="about-facts">
          {FACTS.map(({ icon: Icon, text }) => (
            <li key={text} className="fact">
              <Icon size={28} aria-hidden="true" />
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}