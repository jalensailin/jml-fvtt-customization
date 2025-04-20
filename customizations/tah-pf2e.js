Hooks.on("renderTokenActionHud", (_, element) => {
  if (game.system.id !== "pf2e") return;

  // Move Perception to Skills section
  const perception = element.querySelector(
    ".tah-subgroup[data-nest-id='attributes_perception-check']",
  );
  const coreSkills = element.querySelector(
    ".tah-subgroup[data-nest-id='skills_core-skills']",
  );
  coreSkills.before(perception);

  // Rename Attributes to Saves
  const attributeText = element.querySelector("button[value='attributes'] div");
  attributeText.innerHTML = "Saves";

  // Move Hero Points and Initiativeto Utility section
  const heroPoints = element.querySelector(
    ".tah-subgroup[data-nest-id='attributes_hero-points']",
  );
  const initiative = element.querySelector(
    ".tah-subgroup[data-nest-id='attributes_initiative']",
  );
  const utilityGroups = element.querySelector(
    "#tah-group-utility .tah-list-subgroups",
  );
  utilityGroups.append(heroPoints);
  utilityGroups.prepend(initiative);

  // Recolor Skills button
  const skillsButton = element.querySelector(
    "#tah-group-skills button[value='skills']",
  );
  skillsButton.style.background = "#0376f4bf";
});
