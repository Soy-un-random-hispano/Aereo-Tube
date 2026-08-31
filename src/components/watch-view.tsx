import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Share2, ThumbsDown, ThumbsUp } from "lucide-react";
import { Player } from "@/components/player";
import { relatedVideos, type Video } from "@/lib/videos";

const COMMENTS = [
  {
    user: "Lina Aero",
    initials: "LA",
    text: "Se siente otra vez como el fondo de Vista. Las esferas, el agua, el gloss… perfecto.",
    likes: "1,2 mil",
  },
  {
    user: "Nico Caustic",
    initials: "NC",
    text: "El tema de la extensión deja YouTube irreconocible, en el mejor sentido. Liquid glass de verdad.",
    likes: "840",
  },
  {
    user: "Mar Glass",
    initials: "MG",
    text: "Puse el wallpaper Laguna y las burbujas. No voy a volver al modo oscuro plano.",
    likes: "512",
  },
];

type Props = {
  video: Video;
};

export function WatchView({ video }: Props) {
  const related = relatedVideos(video.id);
  const [liked, setLiked] = useState<"up" | "down" | null>(null);
  const [sub, setSub] = useState(false);

  return (
    <div className="watch">
      <div>
        <Player video={video} />
        <h1 className="watch-title">{video.title}</h1>
        <div className="watch-row">
          <div className="channel-block">
            <span className="ch-av" aria-hidden="true">
              {video.initials}
            </span>
            <div>
              <div className="ch-name">{video.channel}</div>
              <div className="ch-sub">{video.subscribers} suscriptores</div>
            </div>
            <button
              type="button"
              className={sub ? "pill-btn glass" : "pill-btn gloss-btn"}
              onClick={() => setSub((v) => !v)}
            >
              {sub ? "Suscrito" : "Suscribirse"}
            </button>
          </div>
          <div className="action-row">
            <button
              type="button"
              className="pill-btn glass"
              aria-pressed={liked === "up"}
              onClick={() => setLiked((v) => (v === "up" ? null : "up"))}
            >
              <ThumbsUp size={16} />
              {liked === "up" ? "12 mil" : "11 mil"}
            </button>
            <button
              type="button"
              className="pill-btn glass"
              aria-pressed={liked === "down"}
              onClick={() => setLiked((v) => (v === "down" ? null : "down"))}
            >
              <ThumbsDown size={16} />
            </button>
            <button type="button" className="pill-btn glass">
              <Share2 size={16} />
              Compartir
            </button>
          </div>
        </div>
        <div className="desc-card glass">
          <p>
            {video.views} de vistas · {video.age}
          </p>
          <p>{video.description}</p>
        </div>
        <section className="comments">
          <h2>Comentarios</h2>
          {COMMENTS.map((c) => (
            <article key={c.user} className="comment">
              <span className="ch-av" aria-hidden="true">
                {c.initials}
              </span>
              <div>
                <strong>{c.user}</strong>
                <p>{c.text}</p>
                <p className="v-sub">{c.likes} Me gusta</p>
              </div>
            </article>
          ))}
        </section>
      </div>
      <aside className="related" aria-label="Videos relacionados">
        {related.map((v) => (
          <Link key={v.id} to="/watch/$id" params={{ id: v.id }} className="rel-card">
            <div className="thumb-wrap">
              <img src={v.thumb} alt="" />
              <div className="thumb-gloss" />
              <span className="duration">{v.duration}</span>
            </div>
            <div>
              <h3 className="v-title">{v.title}</h3>
              <p className="v-sub">
                {v.channel}
                <br />
                {v.views} de vistas
              </p>
            </div>
          </Link>
        ))}
      </aside>
    </div>
  );
}
