import { useState } from "react";
import { VideoPlayer } from "./VideoPlayer";

export function ProjectList({ items = [] }) {
  const [activeVideoId, setActiveVideoId] = useState(null);
  
  return (
    <ul className="project-grid">
      {items.map(
        ({ id, image, title, task, solution, result, stack, status, highlights, video }) => {

        const cardId = id ?? title;
        return (
          <li key={cardId} id={id} className="card">
            {video ? (
              <VideoPlayer title={title} poster={image} video={video} playing={activeVideoId === cardId} onPlay={() => setActiveVideoId(cardId)} />
            ) : (
              image && <img src={image} alt={title} loading="lazy" />
            )}
            <h3>{title}</h3>

            {highlights?.length > 0 && (
              <ul className="highlights">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            <dl className="case">
              <dt>Задача</dt><dd>{task}</dd>
              <dt>Рішення</dt><dd>{solution}</dd>
              <dt>Результат</dt><dd>{result}</dd>
            </dl>

            <div className="card-tags">
              <span className="tag">{stack}</span>
              {status && <span className="tag tag-status">{status}</span>}
            </div>
          </li>
        
      );
    }
      )}
    </ul>
  );
}