import mhwMonsterList from "../assets/data/mhworld/monster-list.json";
import ConfigManager from "./config-manager";

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
  if (ConfigManager.get("game") === "mhworld") {
    return mhwMonsterList;
  }
  return [];
};

const applyConfigToMonsterList = () => {
  if (currentMonsterList.length <= 10) {
    return;
  }
  let removedMonsters = 0;
  for (let i = 0; i < ConfigManager.get("allowedMonsters").length; i++) {
    if (!ConfigManager.get("allowedMonsters")[i]) {
      currentMonsterList.splice(i-removedMonsters, 1);
      // i--;
      removedMonsters++;
    }
  }
};

const selectMonster = () => {
  let monsterList = getMonsterList();
  let selectedMonster = monsterList[Math.floor(Math.random() * monsterList.length)];
  return selectedMonster;
};

const selectSecondMonster = (firstMonster) => {
  // Check config if double monster chance is enabled and if it fails
  if (ConfigManager.get("allowDoubleMonsters") && Math.random() > ConfigManager.get("doubleMonsterChance")) {
    return null;
  }
  // Check if the first monster is valid for duo
  if (firstMonster === null || firstMonster === undefined) {
    console.warn("First monster is invalid");
    return null;
  }
  if (firstMonster.isEvent) {
    return null;
  }
  let has_Map = false;
  for (let mapIdx in firstMonster.maps) {
    if (firstMonster.maps[mapIdx]) {
      has_Map = true;
      break;
    }
  }
  if (!has_Map) {
    return null;
  }
  // Check if enough monsters are available for duo
  if (getMonsterList().filter((monster) => monster.isEvent).length < 2) {
    console.warn("Not enough monsters for duo");
    return null;
  }

  // Select a second monster
  let monsterList = getMonsterList();
  let selectedMonster = monsterList[Math.floor(Math.random() * monsterList.length)];
  while (!checkIfMonstersAreDuoViable(firstMonster, selectedMonster)) {
    selectedMonster = monsterList[Math.floor(Math.random() * monsterList.length)];
  }
  return selectedMonster;
} 

const checkIfMonstersAreDuoViable = (firstMonster, secondMonster) => {
  // Check if the monsters are the same
  if (firstMonster.id === secondMonster.id) {
    return false;
  }
  // Check if the monsters are events
  if (firstMonster.isEvent || secondMonster.isEvent) {
    return false;
  }
  // Check if the monsters can spawn on the same map
  let mapViability = false;
  for (let mapIdx in firstMonster.maps) {
    if (firstMonster.maps[mapIdx] && secondMonster.maps[mapIdx]) {
      mapViability = true;
      break;
    }
  }
  if (!mapViability) {
    return false;
  }
  // Check if the danger levels are too far apart
  let dangerLevelDifference = Math.abs(firstMonster.dangerLevel - secondMonster.dangerLevel);
  if (dangerLevelDifference > 2) {
    return false;
  }
  // Check if combined Danger Level is too high
  let dangerLevel = firstMonster.dangerLevel + secondMonster.dangerLevel;
  if (dangerLevel > 10) {
    return false;
  }
  return true

};

export { getMonsterList, getFullMonsterList, resetMonsterList, selectMonster, selectSecondMonster };
