import * as games from "./game-icons/game-icons";


/**
 * Returns the icon component for the given svg-icon name.
 *
 * If the icon name is not found, null is returned.
 *
 * @param {string} name the icon name
 * @returns {JSX.Element} the icon component
 */
export default function getIcon(name) {
  switch (name) {
    case "mhworld":
      return games.mhworld;
    case "mhworldiceborne":
      return games.mhworldiceborne;
    case "mhrise":
      return games.mhrise;
    case "mhrisesunbreak":
      return games.mhrisesunbreak;
    default:
      console.warn("Icon not found: " + name);
      return null;
  }
}
