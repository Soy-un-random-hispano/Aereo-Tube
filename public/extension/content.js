(() => {
  const DEFAULTS = {
    enabled: true,
    wallpaper: "lagoon",
    bubbles: true,
    intensity: 72,
    accent: "aqua",
    glossyButtons: true,
  };

  const WALLS = {
    lagoon: "assets/wallpaper-lagoon.jpg",
    sky: "assets/wallpaper-sky.jpg",
    orbs: "assets/wallpaper-orbs.jpg",
    hills: "assets/wallpaper-hills.jpg",
  };

  const host = location.hostname;
  if (host === "music.youtube.com" || host === "studio.youtube.com") return;

  const html = document.documentElement;

  function url(path) {
    try {
      return chrome.runtime.getURL(path);
    } catch {
      return path;
    }
  }

  function ensureLayer() {
    let root = document.getElementById("aero-tube-root");
    if (root) return root;
    root = document.createElement("div");
    root.id = "aero-tube-root";
    root.setAttribute("aria-hidden", "true");

    const wall = document.createElement("div");
    wall.className = "aero-tube-wall";

    const frost = document.createElement("div");
    frost.className = "aero-tube-frost";

    const bubbles = document.createElement("div");
    bubbles.className = "aero-tube-bubbles";
    for (let i = 0; i < 16; i += 1) {
      const b = document.createElement("span");
      b.style.setProperty("--x", `${(i * 17 + 7) % 100}%`);
      b.style.setProperty("--s", `${10 + ((i * 13) % 26)}px`);
      b.style.setProperty("--d", `${14 + (i % 9)}s`);
      b.style.setProperty("--delay", `${-i * 1.4}s`);
      b.style.setProperty("--drift", `${i % 2 === 0 ? 24 : -18}px`);
      bubbles.appendChild(b);
    }

    root.append(wall, frost, bubbles);

    const mount = () => {
      if (document.body) {
        if (!document.getElementById("aero-tube-root")) {
          document.body.prepend(root);
        }
      } else {
        requestAnimationFrame(mount);
      }
    };
    mount();
    return root;
  }

  function apply(settings) {
    const s = { ...DEFAULTS, ...settings };
    html.classList.toggle("aero-tube", Boolean(s.enabled));
    html.dataset.aeroWallpaper = s.wallpaper;
    html.dataset.aeroAccent = s.accent;
    html.dataset.aeroBubbles = s.bubbles ? "on" : "off";
    html.dataset.aeroGloss = s.glossyButtons ? "on" : "off";
    html.style.setProperty("--aero-intensity", String(s.intensity));
    html.style.setProperty("--aero-blur", `${8 + Math.round(Number(s.intensity) * 0.28)}px`);

    const wallPath = WALLS[s.wallpaper] || WALLS.lagoon;
    html.style.setProperty("--aero-wall-image", `url("${url(wallPath)}")`);

    if (s.enabled) ensureLayer();
  }

  apply(DEFAULTS);

  try {
    chrome.storage.sync.get(DEFAULTS, apply);
    chrome.storage.onChanged.addListener((changes, area) => {
      if (area !== "sync") return;
      chrome.storage.sync.get(DEFAULTS, apply);
    });
  } catch {
    /* preview / missing chrome */
  }

  chrome.runtime.onMessage.addListener((msg) => {
    if (msg && msg.type === "aero-settings") apply(msg.settings);
  });
})();
