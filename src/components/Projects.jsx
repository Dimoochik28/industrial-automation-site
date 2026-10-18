import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ProjectPreview } from "./ProjectPreview";

const PREVIEW_COUNT = 3;

export function Projects() {
  return (
    <section id="projects" className="projects" aria-labelledby="projects-title">
      <h2 id="projects-title">Виконані проєкти</h2>
      <p>Реальні приклади впроваджених рішень. Більше проєктів — за запитом.</p>

      <ProjectPreview items={projects.slice(0, PREVIEW_COUNT)} />

      <Link to="/portfolio" className="btn projects-more">
        Усі роботи
      </Link>
    </section>
  );
}