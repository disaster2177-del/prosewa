import { isEmbedVideo } from '../data/projects.js';

/** Plays a local MP4 or an embedded YouTube/Vimeo URL. */
export default function MediaPlayer({ src, poster, title }) {
  if (!src) return null;
  if (isEmbedVideo(src)) {
    return (
      <div className="video-frame">
        <iframe
          src={src}
          title={title}
          loading="lazy"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <div className="video-frame">
      <video controls preload="none" poster={poster} playsInline aria-label={title}>
        <source src={src} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}
