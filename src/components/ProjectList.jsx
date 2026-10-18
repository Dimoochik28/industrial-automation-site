export function ProjectList({ items = []}) {
  return (
    <ul className="project-grid">
      {items.map(({ id, image, title, task, solution, result, stack }) => (
        <li key={id ?? title} className="card">
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
  );
}