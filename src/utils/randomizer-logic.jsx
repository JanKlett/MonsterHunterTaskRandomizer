import mhwMonsterList from "../assets/data/mhworld/monster-list.json";
import ConfigManager from "../utils/config-manager";

var currentMonsterList = [];

const getMonsterList = () => {
  if (currentMonsterList.length === 0) {
    resetMonsterList();
  }
  return currentMonsterList;
};

const resetMonsterList = () => {
  currentMonsterList = structuredClone(getFullMonsterList());
  applyConfigToMonsterList();
};

const getFullMonsterList = () => {
  if (ConfigManager.config.game === "mhworld") {
    return mhwMonsterList;
  }
  return [];
};

const applyConfigToMonsterList = () => {
  if (currentMonsterList.length <= 10) {
    return;
  }
  let removedMonsters = 0;
  for (let i = 0; i < ConfigManager.config.allowedMonsters.length; i++) {
    if (!ConfigManager.config.allowedMonsters[i]) {
      currentMonsterList.splice(i-removedMonsters, 1);
      // i--;
      removedMonsters++;
    }
  }
};

export { getMonsterList, getFullMonsterList, resetMonsterList };
