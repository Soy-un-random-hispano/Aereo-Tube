export type WallpaperId = "lagoon" | "sky" | "orbs" | "hills";
export type AccentId = "aqua" | "lime" | "sunset";

export type AeroSettings = {
  enabled: boolean;
  wallpaper: WallpaperId;
  bubbles: boolean;
  intensity: number;
  accent: AccentId;
  glossyButtons: boolean;
};

export const DEFAULT_AERO: AeroSettings = {
  enabled: true,
  wallpaper: "lagoon",
  bubbles: true,
  intensity: 72,
  accent: "aqua",
  glossyButtons: true,
};

export const WALLPAPERS: {
  id: WallpaperId;
  label: string;
  src: string;
}[] = [
  { id: "lagoon", label: "Laguna", src: "/aero/wallpaper.jpg" },
  { id: "sky", label: "Cielo", src: "/aero/wallpaper-sky.jpg" },
  { id: "orbs", label: "Orbes", src: "/aero/wallpaper-orbs.jpg" },
  { id: "hills", label: "Colinas", src: "/aero/wallpaper-hills.jpg" },
];

export const ACCENTS: { id: AccentId; label: string }[] = [
  { id: "aqua", label: "Aqua" },
  { id: "lime", label: "Lima" },
  { id: "sunset", label: "Atardecer" },
];

export function blurFromIntensity(intensity: number) {
  return `${8 + Math.round(intensity * 0.28)}px`;
}
