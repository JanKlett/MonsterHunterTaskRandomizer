import games from "./game-icons/game-icons";
import weaponIcons from "./game-icons/weapon-icons/weapon-icons";
import monsterIconsMHW from "./monster-icons/mhworld/monster-icons-mhw";

/**
 * Returns the icon component for the given svg-icon name.
 *
 * If the icon name is not found, null is returned.
 *
 * @param {string} name the icon name
 * @returns {JSX.Element} the icon component
 */
export default function getIcon(name) {
  if (games[name]) {
    return games[name];
  } else if (weaponIcons[name]) {
    return weaponIcons[name];
  } else if (monsterIconsMHW[name]) {
    return monsterIconsMHW[name];
  }
  else {
    console.error(`Icon not found: ${name}`);
    return null;
  }
}
