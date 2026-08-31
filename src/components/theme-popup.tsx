import { Download, RotateCcw } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ACCENTS, DEFAULT_AERO, WALLPAPERS } from "@/lib/aero";
import { useAero } from "@/lib/theme-store";

type Props = {
  onClose: () => void;
};

export function ThemePopup({ onClose }: Props) {
  const s = useAero();

  return (
    <>
      <button
        type="button"
        className="popup-back"
        aria-label="Cerrar ajustes"
        onClick={onClose}
      />
      <aside className="popup glass" role="dialog" aria-labelledby="aero-pop-title">
        <h2 id="aero-pop-title">AeroTube</h2>
        <p className="lead">Cristal líquido para YouTube. Los cambios se ven al instante.</p>

        <div className="row-between">
          <span className="field-label">Tema activo</span>
          <button
            type="button"
            className="switch"
            data-on={s.enabled}
            aria-pressed={s.enabled}
            onClick={() => s.setEnabled(!s.enabled)}
          >
            <i />
          </button>
        </div>

        <p className="field-label">Wallpaper</p>
        <div className="wall-grid">
          {WALLPAPERS.map((w) => (
            <button
              key={w.id}
              type="button"
              className="wall-opt"
              data-on={s.wallpaper === w.id}
              onClick={() => s.setWallpaper(w.id)}
            >
              <img src={w.src} alt="" />
              <span>{w.label}</span>
            </button>
          ))}
        </div>

        <div className="row-between">
          <span className="field-label">Burbujas</span>
          <button
            type="button"
            className="switch"
            data-on={s.bubbles}
            aria-pressed={s.bubbles}
            onClick={() => s.setBubbles(!s.bubbles)}
          >
            <i />
          </button>
        </div>

        <div className="row-between">
          <span className="field-label">Botones gloss</span>
          <button
            type="button"
            className="switch"
            data-on={s.glossyButtons}
            aria-pressed={s.glossyButtons}
            onClick={() => s.setGlossyButtons(!s.glossyButtons)}
          >
            <i />
          </button>
        </div>

        <label className="field-label" htmlFor="aero-blur">
          Intensidad del cristal
        </label>
        <input
          id="aero-blur"
          className="range"
          type="range"
          min={20}
          max={100}
          value={s.intensity}
          onChange={(e) => s.setIntensity(Number(e.target.value))}
        />

        <p className="field-label">Acento</p>
        <div className="accent-row">
          {ACCENTS.map((a) => (
            <button
              key={a.id}
              type="button"
              className="accent-dot"
              data-id={a.id}
              data-on={s.accent === a.id}
              aria-label={a.label}
              onClick={() => s.setAccent(a.id)}
            />
          ))}
        </div>

        <div className="popup-actions">
          <button
            type="button"
            className="ghost-btn glass"
            onClick={() =>
              useAero.setState({
                ...DEFAULT_AERO,
              })
            }
          >
            <RotateCcw size={14} />
            Reset
          </button>
          <Link to="/install" className="gloss-btn" onClick={onClose}>
            <Download size={14} />
            Instalar
          </Link>
        </div>
      </aside>
    </>
  );
}
