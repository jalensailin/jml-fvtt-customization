import "./customizations/tah-pf2e.js";

Hooks.on("ready", () => {
  console.log("Jalen's FVTT Customizations - READY");

  // Left Click to Release objects => Always True;
  game.settings.set("core", "leftClickRelease", true);
});
