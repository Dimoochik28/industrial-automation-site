import { Play } from "lucide-react";


export function VideoPlayer({ title, poster, video, playing, onPlay }) {
  const { src, youtubeId } = video;

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
      onClick={ onPlay}
      aria-label={`Дивитися відео: ${title}`}
    >
      {poster && <img src={poster} alt="" loading="lazy" />}
      <span className="play-badge" aria-hidden="true">
        <Play size={28} fill="currentColor" />
      </span>
    </button>
  );
}