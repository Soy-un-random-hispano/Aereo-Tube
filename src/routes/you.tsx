import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { ACCENTS, WALLPAPERS } from "@/lib/aero";
import { useAero } from "@/lib/theme-store";

export const Route = createFileRoute("/you")({ component: YouPage });

function YouPage() {
  const s = useAero();

  return (
    <AppShell>
      <div className="install">
        <h1>Tu look Aero</h1>
        <p className="lede">
          Los mismos controles que el popup de la extensión. Pruébalos aquí y
          llévatelos a YouTube.
        </p>

        <div className="desc-card glass mt-6">
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
          <label className="field-label" htmlFor="you-blur">
            Intensidad del cristal
          </label>
          <input
            id="you-blur"
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
        </div>
      </div>
    </AppShell>
  );
}
