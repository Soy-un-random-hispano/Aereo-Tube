const DEFAULTS = {
  enabled: true,
  wallpaper: "lagoon",
  bubbles: true,
  intensity: 72,
  accent: "aqua",
  glossyButtons: true,
};

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get(null, (cur) => {
    const next = { ...DEFAULTS, ...cur };
    chrome.storage.sync.set(next);
  });
});
