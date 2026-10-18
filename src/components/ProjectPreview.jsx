import { Link } from "react-router-dom";

export function ProjectPreview({ items = [] }) {
  return (
    <ul className="project-grid">
      {items.map(({ id, image, title, summary, stack, status }) => (
        <li key={id ?? title} className="card">
          {image && <img src={image} alt={title} loading="lazy" />}
          <h3>{title}</h3>
          <p>{summary}</p>

          <div className="card-tags">
            <span className="tag">{stack}</span>
            {status && <span className="tag tag-status">{status}</span>}
          </div>

          <Link to={`/portfolio#${id}`} className="card-link">
            Детальніше
            <span className="visually-hidden"> про проєкт «{title}»</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}