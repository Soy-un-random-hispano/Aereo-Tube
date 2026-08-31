import { Link } from "@tanstack/react-router";
import { CHIPS, filterVideos } from "@/lib/videos";
import { useAero } from "@/lib/theme-store";

export function VideoGrid() {
  const search = useAero((s) => s.search);
  const chip = useAero((s) => s.chip);
  const setChip = useAero((s) => s.setChip);
  const videos = filterVideos(search, chip);

  return (
    <>
      <div className="chips" role="tablist" aria-label="Filtros">
        {CHIPS.map((c) => (
          <button
            key={c}
            type="button"
            className="chip"
            data-on={chip === c}
            onClick={() => setChip(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {videos.length === 0 ? (
        <div className="empty glass">
          <h2>Nada por aquí</h2>
          <p>Prueba otra búsqueda o quita el filtro.</p>
        </div>
      ) : (
        <div className="grid-videos">
          {videos.map((v) => (
            <Link key={v.id} to="/watch/$id" params={{ id: v.id }} className="v-card">
              <div className="thumb-wrap">
                <img src={v.thumb} alt="" />
                <div className="thumb-gloss" />
                <span className="duration">{v.duration}</span>
              </div>
              <div className="v-meta">
                <span className="ch-av" aria-hidden="true">
                  {v.initials}
                </span>
                <div>
                  <h3 className="v-title">{v.title}</h3>
                  <p className="v-sub">
                    {v.channel}
                    <br />
                    {v.views} de vistas · {v.age}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
