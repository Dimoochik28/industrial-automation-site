import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="projects" aria-labelledby="projects-title">
      <h2 id="projects-title">Виконані проєкти</h2>
      <p>Реальні приклади впроваджених рішень. Більше проєктів — за запитом.</p>

      <ul className="project-grid">
        {projects.map(({ image, title, task, solution, result, stack, id }) => (
          <li key={id} className="card">
            <img src={image} alt={title} loading="lazy" />
            <h3>{title}</h3>
            <dl className="case">
              <dt>Задача</dt><dd>{task}</dd>
              <dt>Рішення</dt><dd>{solution}</dd>
              <dt>Результат</dt><dd>{result}</dd>
            </dl>
            <span className="tag">{stack}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}