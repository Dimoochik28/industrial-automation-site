import { Settings } from "lucide-react";

export function Header() {
  return(
    <div>  
      <div>
        <img src={Settings} alt="Logo" />
        <h2>Промислова автоматизація</h2>
        <h3>PLC/CNC</h3>
      </div>
      <div>
        <ul>
          <li><a href="#services">Послуги</a></li>
          <li><a href="#about">Наші роботи</a></li>
          <li><a href="#about">Про нас</a></li>
          <li><a href="#contact">Контакти</a></li>
        </ul>
      </div>
      <div>
        <button>Зв'язатися</button>
      </div>
    </div>
  )
}