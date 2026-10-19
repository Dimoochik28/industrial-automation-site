import { useState } from "react";
import { Play } from "lucide-react";

export function VideoPlayer({ title, poster, video }) {
  const [playing, setPlaying] = useState(false);
  const { src, youtubeId } = video;
  const thumb =
    poster ?? (youtubeId ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg` : undefined);

  if (playing) {
    return (
      <div className="media">
        {youtubeId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={`Відео: ${title}`}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <video src={src} poster={poster} controls autoPlay playsInline />
        )}
      </div>
    );
  }

  return (
    <button
      type="button"
      className="media video-poster"
      onClick={() => setPlaying(true)}
      aria-label={`Дивитися відео: ${title}`}
    >
      {thumb && <img src={thumb} alt="" loading="lazy" />}
      <span className="play-badge" aria-hidden="true">
        <Play size={28} fill="currentColor" />
      </span>
    </button>
  );
}