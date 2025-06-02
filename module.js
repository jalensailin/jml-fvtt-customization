import "./customizations/tah-pf2e.js";
import "./customizations/base-foundry.js";

// CONFIG.debug.hooks = true;

Hooks.on("ready", () => {
  console.log("Jalen's FVTT Customizations - READY");

  // Left Click to Release objects => Always True;
  game.settings.set("core", "leftClickRelease", true);
});
