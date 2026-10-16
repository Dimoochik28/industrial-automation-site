import { Settings } from "lucide-react";

export function Header() {
  return(
    <header className="header">  
      <div>
        <img className="logo" src={Settings} alt="Logo" />
        <div className="logo-text">
          <h2>Промислова автоматизація</h2>
          <h3>PLC/CNC</h3>
        </div>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#services">Послуги</a></li>
          <li><a href="#about">Наші роботи</a></li>
          <li><a href="#about">Про нас</a></li>
          <li><a href="#contact">Контакти</a></li>
        </ul>
      </nav>
      <div>
        <button className="btn btn-sm">Зв'язатися</button>
      </div>
    </header>
  )
}