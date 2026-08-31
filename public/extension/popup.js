const DEFAULTS = {
  enabled: true,
  wallpaper: "lagoon",
  bubbles: true,
  intensity: 72,
  accent: "aqua",
  glossyButtons: true,
};

const enabled = document.getElementById("enabled");
const bubbles = document.getElementById("bubbles");
const glossy = document.getElementById("glossyButtons");
const intensity = document.getElementById("intensity");
const walls = document.getElementById("walls");
const accents = document.getElementById("accents");
const reset = document.getElementById("reset");

function paint(s) {
  enabled.checked = Boolean(s.enabled);
  bubbles.checked = Boolean(s.bubbles);
  glossy.checked = Boolean(s.glossyButtons);
  intensity.value = String(s.intensity);
  walls.querySelectorAll("button").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.wall === s.wallpaper));
  });
  accents.querySelectorAll("button").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.accent === s.accent));
  });
}

function save(partial) {
  chrome.storage.sync.get(DEFAULTS, (cur) => {
    const next = { ...DEFAULTS, ...cur, ...partial };
    chrome.storage.sync.set(next);
    paint(next);
    chrome.tabs.query({ url: ["*://www.youtube.com/*", "*://youtube.com/*", "*://m.youtube.com/*"] }, (tabs) => {
      for (const tab of tabs) {
        if (tab.id == null) continue;
        try {
          const sent = chrome.tabs.sendMessage(tab.id, {
            type: "aero-settings",
            settings: next,
          });
          if (sent && typeof sent.catch === "function") sent.catch(() => {});
        } catch {
          /* tab without content script */
        }
      }
    });
  });
}

chrome.storage.sync.get(DEFAULTS, paint);

enabled.addEventListener("change", () => save({ enabled: enabled.checked }));
bubbles.addEventListener("change", () => save({ bubbles: bubbles.checked }));
glossy.addEventListener("change", () => save({ glossyButtons: glossy.checked }));
intensity.addEventListener("input", () => save({ intensity: Number(intensity.value) }));

walls.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-wall]");
  if (btn) save({ wallpaper: btn.dataset.wall });
});

accents.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-accent]");
  if (btn) save({ accent: btn.dataset.accent });
});

reset.addEventListener("click", () => save(DEFAULTS));
