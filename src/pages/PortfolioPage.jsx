import { projects } from "../data/projects";
import { ProjectList } from "../components/ProjectList";
import { Contact } from "../components/Contact";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export function PortfolioPage() {
  useDocumentMeta({
    title: "Наші роботи | Промислова автоматизація",
    description:
      "Виконані проєкти з ремонту та модернізації промислового обладнання: задача, рішення, результат.",
  });

  return (
    <>
      <section className="projects" aria-labelledby="portfolio-title">
        <span className="section-label">Портфоліо</span>
        <h1 id="portfolio-title" className="page-title">Наші роботи</h1>
        <p>Приклади виконаних проєктів: що було несправним, що зробили і який результат.</p>

        <ProjectList items={projects} />
      </section>

      <Contact />
    </>
  );
}