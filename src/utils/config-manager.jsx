import { getLocalizedString } from "../localization/localization";
import CookieManager from "./cookie-manager";
import mhwMonsterList from "../assets/data/mhworld/monster-list.json";
import {resetMonsterList} from "./monster-randomizer-logic";

const weaponClasses = [
  "greatsword",
  "longsword",
  "sword-and-shield",
  "dual-blades",
  "hammer",
  "hunting-horn",
  "lance",
  "gunlance",
  "switch-axe",
  "charge-blade",
  "insect-glaive",
  "bow",
  "light-bowgun",
  "heavy-bowgun",
];

const getDefaultPlayer = (index) => {
  return JSON.parse(
    JSON.stringify({
      name: getLocalizedString([
        "ui",
        "game-config",
        "default-player-names",
        "player" + (index + 1),
      ]),
      allowedWeapons: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      weapon: -1,
      previousWeapon: -1,
      challenges: [-1],
      previousChallenge: [-1],
    })
  );
};

const dlcNames = {
  mhworld: "iceborne",
  mhrise: "sunbreak",
};

/**
 * Config manager
 */
const ConfigManager = {
  saveConfig: CookieManager.getCookie("saveConfig") === "true",
  config: {
    game: null,
    dlc: false,
    playerCount: 1,
    players: [
      getDefaultPlayer(0),
      getDefaultPlayer(1),
      getDefaultPlayer(2),
      getDefaultPlayer(3),
    ],
    challenges: [],
    allowedMonsters: [],
  },
  /**
   * Get the value of the config key
   *
   * @param {String} key Key of the config value
   * @returns {any} the value of the config key
   */
  get: (key) => {
    return ConfigManager.config[key];
  },
  /**
   * Set the value of the config key
   *
   * and save it to local storage if saveConfig is true
   *
   * @param {String} key Key of the config value
   * @param {any} value Value of the config key
   * @returns {void}
   */
  set: (key, value) => {
    ConfigManager.config[key] = value;
    ConfigManager.save();
  },
  /**
   * Set the game in the config
   *
   * If the game is a dlc, the dlc flag is set to true
   *
   * @param {String} game Game to set in the config
   * @returns {void}
   */
  setGame: (game) => {
    switch (game) {
      case "mhworldiceborne":
        ConfigManager.config.dlc = true;
        ConfigManager.config.game = "mhworld";
        break;
      case "mhrisesunbreak":
        ConfigManager.config.dlc = true;
        ConfigManager.config.game = "mhrise";
        break;
      default:
        ConfigManager.config.dlc = false;
        ConfigManager.config.game = game;
    }
    if (!ConfigManager.load()) {
      if (ConfigManager.config.game === "mhworld") {
        ConfigManager.config.allowedMonsters = mhwMonsterList.map(
          (monster) => !(monster.isDLC && !ConfigManager.config.dlc)
        );
      }
      ConfigManager.save();
      return false;
    }
    ConfigManager.save();
    resetMonsterList();
    return true;
  },
  /**
   * Disable DLC monsters in the config
   *
   */
  disableDLC: () => {
    if (ConfigManager.config.game === "mhworld") {
      ConfigManager.config.dlc = false;
      ConfigManager.config.allowedMonsters = mhwMonsterList.map(
        (monster) => !monster.isDLC
      );
    }
    ConfigManager.save();
  },
  /**
   * Add a player to the config
   *
   * If saveConfig is false the new player is reset to the default player
   *
   * If the player count is greater than 4, it is set to 4
   */
  addPlayer: () => {
    ConfigManager.config.playerCount++;
    if (ConfigManager.config.playerCount > 4) {
      ConfigManager.config.playerCount = 4;
    }
    if (!ConfigManager.config.saveConfig) {
      ConfigManager.players[ConfigManager.config.playerCount - 1] =
        getDefaultPlayer(ConfigManager.config.playerCount - 1);
    }
    ConfigManager.save();
  },
  /**
   * Remove a player from the config
   *
   * If saveConfig is false the player is reset to the default
   *
   * If the player count is less than 1, it is set to 1
   */
  removePlayer: () => {
    ConfigManager.config.playerCount--;
    if (ConfigManager.config.playerCount < 1) {
      ConfigManager.config.playerCount = 1;
    }
    if (!ConfigManager.config.saveConfig) {
      ConfigManager.players[ConfigManager.config.playerCount] =
        getDefaultPlayer(ConfigManager.config.playerCount);
    }
    ConfigManager.save();
  },
  /**
   * Load the config from local storage
   *
   * If the game is not set, the config is not loaded
   *
   * @returns {Boolean} true if the config was loaded, false otherwise
   */
  load: () => {
    if (ConfigManager.game === null) {
      console.warn("Tried to load config without setting the game");
      return false;
    }
    const config = localStorage.getItem(
      `${ConfigManager.config.game}${
        ConfigManager.config.dlc ? "+dlc" : ""
      }-config`
    );
    console.log(`Loading Config: ${ConfigManager.config.game}${
        ConfigManager.config.dlc ? "+dlc" : ""
      }-config`);
    if (config) {
      ConfigManager.config = JSON.parse(config);
      return true;
    }
    return false;
  },
  /**
   * Save the config to local storage
   */
  save: () => {
    if (ConfigManager.saveConfig) {
      localStorage.setItem(
        `${ConfigManager.config.game}${
          ConfigManager.config.dlc ? "+dlc" : ""
        }-config`,
        JSON.stringify(ConfigManager.config)
      );
    }
  },
  /**
   * Set the saveConfig value
   *
   * If save is false, the config is removed from local storage
   *
   * If save is true, the config is saved to local storage
   *
   * @param {Boolean} save New value of saveConfig
   * @returns {void}
   */
  setSaveConfig: (save) => {
    ConfigManager.saveConfig = save;
    CookieManager.setCookie("saveConfig", save, 24 * 100);
    if (!save) {
      localStorage.removeItem(
        `${ConfigManager.config.game}${
          ConfigManager.config.dlc ? "+dlc" : ""
        }-config`
      );
    } else {
      localStorage.setItem(
        `${ConfigManager.config.game}${
          ConfigManager.config.dlc ? "+dlc" : ""
        }-config`,
        JSON.stringify(ConfigManager.config)
      );
    }
  },
  /**
   * Reset the config to the default values
   *
   * and remove the saveConfig cookie
   */
  reset: () => {
    ConfigManager.config = {
      game: null,
      dlc: false,
      playerCount: 1,
      players: [
        getDefaultPlayer(0),
        getDefaultPlayer(1),
        getDefaultPlayer(2),
        getDefaultPlayer(3),
      ],
      challenges: [],
      allowedMonsters: [],
    };
    CookieManager.deleteCookie("saveConfig");
  },
  /**
   * Remove the config from local storage
   */
  removeSavedConfig: () => {
    localStorage.removeItem(
      `${ConfigManager.config.game}${ConfigManager.config.dlc ? "+dlc" : ""}-config`
    );
  },
  /**
   * Get the weapon class at the given index
   *
   * @param {Number} index Index of the weapon class
   * @returns {String} the weapon class at the given index
   */
  getWeaponClass: (index) => {
    return weaponClasses[index];
  },
  /**
   * Get the weapon classes
   *
   * @returns {String[]} the weapon classes
   */
  getWeaponClasses: () => {
    return weaponClasses;
  },
  /**
   * Check if the monster is allowed
   * @param {Number} monsterId the monster id
   * @returns {Boolean} true if the monster is allowed, false otherwise
   */
  isMonsterAllowed: (monsterId) => {
    return ConfigManager.config.allowedMonsters[monsterId];
  },
  /**
   * Toggle the monster in the config
   *
   * @param {Number} monsterId the monster id
   * @param {Boolean} state the new state of the monster
   */
  toggleMonster: (monsterId, state) => {
    console.log(`Toggling monster ${monsterId} to ${state}`);
    ConfigManager.config.allowedMonsters[monsterId] = state;
    ConfigManager.save();
    resetMonsterList();
  },
};

export default ConfigManager;
export { dlcNames };
