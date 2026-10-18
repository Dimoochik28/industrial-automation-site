import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Projects } from "../components/Projects";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export function HomePage() {
  useDocumentMeta({
    title: "Ремонт PLC, ЧПК та промислової електроніки | Промислова автоматизація",
    description: "Ремонт PLC, ЧПК (CNC), HMI, приводів та промислової електроніки. Діагностика і модернізація обладнання. Волинська область, виїзди по Україні.",
  });

  return (
    <> 
      <Hero/>
      <Services/>
      <Projects/>
      <About/>
      <Contact/>
    </>
  )
}