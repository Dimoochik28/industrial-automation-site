import { projects } from "../data/projects.js"

export function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Виконані проєкти</h2>
      <p>Реальні приклади впроваджених рішень. Більше проєктів -- за запитом</p>
      <div className="project-grid">
        {projects.map(({ image, title, text, stack }) => (
          <article key={title} className="card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{text}</p>
            <span className="tag">{stack}</span>
          </article>
        ))}
      </div>
    </section>
  )
}
