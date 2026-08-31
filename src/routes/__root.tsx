import { useEffect } from "react";
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { useAero } from "@/lib/theme-store";
import { blurFromIntensity, WALLPAPERS } from "@/lib/aero";
import appCss from "../styles.css?url";

const APP_NAME = "AeroTube";

function ThemeSync() {
  const enabled = useAero((s) => s.enabled);
  const wallpaper = useAero((s) => s.wallpaper);
  const bubbles = useAero((s) => s.bubbles);
  const intensity = useAero((s) => s.intensity);
  const accent = useAero((s) => s.accent);
  const glossyButtons = useAero((s) => s.glossyButtons);

  useEffect(() => {
    const h = document.documentElement;
    h.dataset.aero = enabled ? "on" : "off";
    h.dataset.aeroWallpaper = wallpaper;
    h.dataset.aeroAccent = accent;
    h.dataset.aeroBubbles = bubbles ? "on" : "off";
    h.dataset.aeroGloss = glossyButtons ? "on" : "off";
    h.style.setProperty("--aero-intensity", String(intensity));
    h.style.setProperty("--aero-blur", blurFromIntensity(intensity));
    const src = WALLPAPERS.find((w) => w.id === wallpaper)?.src ?? WALLPAPERS[0].src;
    h.style.setProperty("--aero-wall-image", `url("${src}")`);
  }, [enabled, wallpaper, bubbles, intensity, accent, glossyButtons]);

  return null;
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Extensión de Chrome que personaliza YouTube con un tema Frutiger Aero de cristal líquido.",
      },
      { name: "theme-color", content: "#4FC3F7" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Comfortaa:wght@500;600;700&family=Nunito:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="es" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <ThemeSync />
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
