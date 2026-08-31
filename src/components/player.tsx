import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  Maximize,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";
import type { Video } from "@/lib/videos";

function fmt(sec: number) {
  const s = Math.max(0, Math.floor(sec));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const r = s % 60;
  const mm = h > 0 ? String(m).padStart(2, "0") : String(m);
  const ss = String(r).padStart(2, "0");
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}

type Props = {
  video: Video;
};

export function Player({ video }: Props) {
  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(0);
  const [muted, setMuted] = useState(false);
  const [vol, setVol] = useState(0.8);
  const box = useRef<HTMLDivElement>(null);
  const last = useRef<number | null>(null);

  useEffect(() => {
    setPlaying(false);
    setT(0);
  }, [video.id]);

  useEffect(() => {
    if (!playing) {
      last.current = null;
      return;
    }
    let raf = 0;
    const tick = (now: number) => {
      if (last.current == null) last.current = now;
      const dt = (now - last.current) / 1000;
      last.current = now;
      setT((prev) => {
        const next = prev + dt;
        if (next >= video.durationSec) {
          setPlaying(false);
          return video.durationSec;
        }
        return next;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, video.durationSec]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.code === "Space") {
        e.preventDefault();
        setPlaying((p) => !p);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const p = video.durationSec ? (t / video.durationSec) * 100 : 0;

  return (
    <div
      ref={box}
      className="player"
      data-playing={playing}
      onDoubleClick={() => {
        const el = box.current;
        if (!el) return;
        if (document.fullscreenElement) void document.exitFullscreen();
        else void el.requestFullscreen();
      }}
    >
      <div className="player-frame">
        <img src={video.thumb} alt="" />
      </div>
      <div className="player-caustic" />

      {!playing ? (
        <button
          type="button"
          className="big-play"
          aria-label="Reproducir"
          onClick={() => setPlaying(true)}
        >
          <span className="big-play-orb">
            <Play size={34} fill="currentColor" />
          </span>
        </button>
      ) : null}

      <div className="player-chrome">
        <div className="scrub" style={{ "--p": `${p}%` } as CSSProperties}>
          <div className="scrub-track">
            <div className="scrub-fill" />
          </div>
          <input
            type="range"
            min={0}
            max={video.durationSec}
            step={1}
            value={t}
            aria-label="Progreso"
            onChange={(e) => setT(Number(e.target.value))}
          />
        </div>
        <div className="chrome-row">
          <button
            type="button"
            aria-label={playing ? "Pausa" : "Reproducir"}
            onClick={() => setPlaying((v) => !v)}
          >
            {playing ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
          </button>
          <button
            type="button"
            aria-label={muted || vol === 0 ? "Activar sonido" : "Silenciar"}
            onClick={() => setMuted((m) => !m)}
          >
            {muted || vol === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <input
            className="vol"
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={muted ? 0 : vol}
            aria-label="Volumen"
            onChange={(e) => {
              const v = Number(e.target.value);
              setVol(v);
              setMuted(v === 0);
            }}
          />
          <span className="time-read">
            {fmt(t)} / {video.duration}
          </span>
          <button
            type="button"
            aria-label="Pantalla completa"
            onClick={() => {
              const el = box.current;
              if (!el) return;
              if (document.fullscreenElement) void document.exitFullscreen();
              else void el.requestFullscreen();
            }}
          >
            <Maximize size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
