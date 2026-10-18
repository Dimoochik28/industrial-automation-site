import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Projects } from "../components/Projects";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export function HomePage() {
  useDocumentMeta({
    title: "Ремонт та модернізація PLC, CNC, HMI | Промислова автоматизація",
    description: "Ремонт та модернізація промислового обладнання: PLC, CNC, HMI, сервоприводи, частотні перетворювачі. Волинська область, працюємо по всій країні."
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