import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App, GroupType } from "./app";

const startingSkillGroups = [
  {
    groupName: "Perception",
    skills: ["Hide", "Move Silently", "Spot", "Listen", "Spellcraft", "Search", "Sense Motive"]
  },
  {
    groupName: "Knowledge",
    skills: ["Knowledge (Arcana)", "Knowledge (Architecture and engineering)", "Knowledge (Dungeoneering)", "Knowledge (Geography)", "Knowledge (History)", "Knowledge (Local)", "Knowledge (Nature)", "Knowledge (Nobility and royalty)", "Knowledge (Religion)", "Knowledge (The planes)"]
  },
  {
    groupName: "Skulduggery",
    skills: ["Sleight of Hand", "Use Rope", "Open Lock", "Disable Device", "Bluff", "Disguise"]
  },
  {
    groupName: "Interaction",
    skills: ["Sense Motive", "Diplomacy", "Gather Information", "Heal", "Intimidate", "Speak Language"]
  },
  {
    groupName: "Physical Fitness",
    skills: ["Balance", "Concentration", "Climb", "Escape Artist", "Jump", "Ride", "Tumble", "Swim"]
  },
  {
    groupName: "Wilderness",
    skills: ["Handle Animal", "Survival", "Ride", "Swim", "Climb", "Jump", "Heal"]
  },
  {
    groupName: "Civilization",
    skills: ["Appraise", "Craft ()", "Decipher Script", "Forgery", "Perform ()", "Profession ()"]
  },

].map(element => ({
  groupName: element.groupName,
  skills: element.skills.map(element => ({
    skillName: element,
    ranksInGroup: 0
  })),
  type: GroupType.normal
}));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App skillGroups={startingSkillGroups} />
  </StrictMode>,
)
