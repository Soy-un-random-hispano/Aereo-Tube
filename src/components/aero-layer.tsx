import type { CSSProperties } from "react";

const BUBBLES = Array.from({ length: 16 }, (_, i) => ({
  x: `${(i * 17 + 7) % 100}%`,
  s: `${10 + ((i * 13) % 26)}px`,
  d: `${14 + (i % 9)}s`,
  delay: `${-i * 1.4}s`,
  drift: `${i % 2 === 0 ? 24 : -18}px`,
}));

export function AeroLayer() {
  return (
    <div className="aero-layer" aria-hidden="true">
      <div className="aero-wall" />
      <div className="aero-wall-frost" />
      <div className="aero-bubbles">
        {BUBBLES.map((b) => (
          <span
            key={b.x + b.s}
            style={
              {
                "--x": b.x,
                "--s": b.s,
                "--d": b.d,
                "--delay": b.delay,
                "--drift": b.drift,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
