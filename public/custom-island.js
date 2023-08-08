class MiniIsland extends HTMLElement {
  static tagName = "mini-island";
  static attributes = {
    dataIsland: "data-island",
  };
}

if ("customElements" in window) {
  window.customElements.define(MiniIsland.tagName, MiniIsland);
} else {
  console.error(
    "Island cannot be initiated because Window.customElements is unavailable."
  );
}