import { getLocalizedString } from "../localization/localization";
import CookieManager from "./cookie-manager";

const weaponClasses = [
  getLocalizedString(["ui", "game-config", "weapon-classes", "great-sword"]),
  getLocalizedString(["ui", "game-config", "weapon-classes", "long-sword"]),
  getLocalizedString([
    "ui",
    "game-config",
    "weapon-classes",
    "sword-and-shield",
  ]),
  getLocalizedString(["ui", "game-config", "weapon-classes", "dual-blades"]),
  getLocalizedString(["ui", "game-config", "weapon-classes", "hammer"]),
  getLocalizedString(["ui", "game-config", "weapon-classes", "hunting-horn"]),
  getLocalizedString(["ui", "game-config", "weapon-classes", "lance"]),
  getLocalizedString(["ui", "game-config", "weapon-classes", "gunlance"]),
  getLocalizedString(["ui", "game-config", "weapon-classes", "switch-axe"]),
  getLocalizedString(["ui", "game-config", "weapon-classes", "charge-blade"]),
  getLocalizedString(["ui", "game-config", "weapon-classes", "insect-glaive"]),
  getLocalizedString(["ui", "game-config", "weapon-classes", "bow"]),
  getLocalizedString(["ui", "game-config", "weapon-classes", "light-bowgun"]),
  getLocalizedString(["ui", "game-config", "weapon-classes", "heavy-bowgun"]),
];

const getDefaultPlayer = (index) => {
  return JSON.parse(
    JSON.stringify({
      name: getLocalizedString([
        "ui",
        "player",
        "default-player-names",
        "player" + (index + 1),
      ]),
      allowedWeapons: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      previousWeapon: -1,
      previousChallenge: [-1],
    })
  );
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
      if (ConfigManager.saveConfig) {
        localStorage.setItem(
          `${ConfigManager.config.game}-config`,
          JSON.stringify(ConfigManager.config)
        );
      }
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
      const config = localStorage.getItem(`${ConfigManager.config.game}-config`);
      if (config) {
        ConfigManager.config = JSON.parse(config);
        return true;
      }
      return false;
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
        localStorage.removeItem(`${ConfigManager.config.game}-config`);
      } else {
        localStorage.setItem(
          `${ConfigManager.config.game}-config`,
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
    removeSavedConfig: (game) => {
      localStorage.removeItem(`${game}-config`);
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
};
  

export default ConfigManager;