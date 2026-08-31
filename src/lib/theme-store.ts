import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  DEFAULT_AERO,
  type AccentId,
  type AeroSettings,
  type WallpaperId,
} from "@/lib/aero";

type AeroState = AeroSettings & {
  promoDismissed: boolean;
  search: string;
  chip: string;
  setEnabled: (enabled: boolean) => void;
  setWallpaper: (wallpaper: WallpaperId) => void;
  setBubbles: (bubbles: boolean) => void;
  setIntensity: (intensity: number) => void;
  setAccent: (accent: AccentId) => void;
  setGlossyButtons: (glossyButtons: boolean) => void;
  setPromoDismissed: (promoDismissed: boolean) => void;
  setSearch: (search: string) => void;
  setChip: (chip: string) => void;
  reset: () => void;
};

export const useAero = create<AeroState>()(
  persist(
    (set) => ({
      ...DEFAULT_AERO,
      promoDismissed: false,
      search: "",
      chip: "Todos",
      setEnabled: (enabled) => set({ enabled }),
      setWallpaper: (wallpaper) => set({ wallpaper }),
      setBubbles: (bubbles) => set({ bubbles }),
      setIntensity: (intensity) => set({ intensity }),
      setAccent: (accent) => set({ accent }),
      setGlossyButtons: (glossyButtons) => set({ glossyButtons }),
      setPromoDismissed: (promoDismissed) => set({ promoDismissed }),
      setSearch: (search) => set({ search }),
      setChip: (chip) => set({ chip }),
      reset: () =>
        set({
          ...DEFAULT_AERO,
          search: "",
          chip: "Todos",
        }),
    }),
    {
      name: "aerotube-settings",
      partialize: (s) => ({
        enabled: s.enabled,
        wallpaper: s.wallpaper,
        bubbles: s.bubbles,
        intensity: s.intensity,
        accent: s.accent,
        glossyButtons: s.glossyButtons,
        promoDismissed: s.promoDismissed,
      }),
    },
  ),
);
