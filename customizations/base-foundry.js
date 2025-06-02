/**
 * Rename Measure Controls to Areas of Effect
 * Also change icon.
 */
Hooks.on("renderSceneControls", (sceneControls, html) => {
  html = Number.parseInt(game.version) === 12 ? html[0] : html;
  const measureControl = html.querySelector("li[data-control='measure']");

  measureControl.setAttribute("data-tooltip", "Areas of Effect");
  measureControl
    .querySelector("i")
    .setAttribute("class", "fa-regular fa-circle-dot");
});
