import mhwChallengeList from "../assets/data/mhworld/challenge-list.json";
import ConfigManager from "./config-manager";

var currentChallengeList = [];

const getChallengeList = () => {
  if (currentChallengeList.length === 0) {
    resetChallengeList();
  }
  return currentChallengeList;
};

const resetChallengeList = () => {
  currentChallengeList = structuredClone(getFullChallengeList());
  applyConfigToChallengeList();
};

const getFullChallengeList = () => {
  if (ConfigManager.get("game") === "mhworld") {
    if (ConfigManager.get("challenges").length === 0) {
      ConfigManager.set("challenges", mhwChallengeList);
    }
    return ConfigManager.get("challenges");
  }
  return [];
};

const applyConfigToChallengeList = () => {
  currentChallengeList = ConfigManager.get("challenges").filter(
    (challenge) => challenge.isActive
  );
};

const selectChallenge = (currentMonsters, player) => {
  let challengeList = getChallengeList();
  let monsterThreatLevel = 0;
  for (let i = 0; i < currentMonsters.length; i++) {
    if (currentMonsters[i] === undefined || currentMonsters[i] === null) {
      continue;
    }
    monsterThreatLevel += currentMonsters[i].threatLevel;
  }
  let selectedChallenge =
    challengeList[Math.floor(Math.random() * challengeList.length)];

  while (!isChallengeValid(selectedChallenge, monsterThreatLevel, player)) {
    selectedChallenge =
      challengeList[Math.floor(Math.random() * challengeList.length)];
  }

  // Check if it's the two challenges challenge
  if (Math.random() < player.doubleChallengeChance) {
    // Select the second challenge
    let secondChallenge =
      challengeList[Math.floor(Math.random() * challengeList.length)];
    while (
      !checkIfSecondChallengeIsValid(
        selectedChallenge,
        secondChallenge,
        monsterThreatLevel,
        player
      )
    ) {
      secondChallenge =
        challengeList[Math.floor(Math.random() * challengeList.length)];
    }
    player.challenges = [selectedChallenge, secondChallenge];
  } else {
    player.challenges = [selectedChallenge];
  }
};

const isChallengeValid = (challenge, monsterThreatLevel, player) => {
  if (challenge === undefined || challenge === null) {
    return false;
  }
  // Check if the challenge is active
  if (!challenge.isActive) {
    return false;
  }
  let playerWeapon = player.weapon;
  // Check if the challenge is valid for the players weapon
  if (challenge.excludedWeapons.includes(playerWeapon)) {
    return false;
  }
  // Check if the challenge is valid for the monster threat level
  if (challenge.maxThreatLevel <= monsterThreatLevel) {
    return false;
  }
  // Reduce chance for repeat challenges
  if (challenge === player.challenges[0]) {
    return false;
  }
  if (
    player.challenges.length > 1 &&
    player.challenges[1] !== null &&
    challenge === player.challenges[1]
  ) {
    return false;
  }
  return true;
};

const checkIfSecondChallengeIsValid = (
  firstChallenge,
  secondChallenge,
  monsterThreatLevel,
  player
) => {
  // General check if the second challenge is valid
  if (!isChallengeValid(secondChallenge, monsterThreatLevel, player)) {
    return false;
  }
  // Check if the challenges are the same
  if (firstChallenge.id === secondChallenge.id) {
    return false;
  }
  // Check if it is the two challenges challenge
  if (secondChallenge.key === "two-challenges") {
    return false;
  }
  // Check if the second challenge is valid for the first challenge
  if (
    firstChallenge.excludedChallenges.includes(secondChallenge.id) ||
    secondChallenge.excludedChallenges.includes(firstChallenge.id)
  ) {
    return false;
  }
  return true;
};

const selectChallengeForAllPlayers = (currentMonsters) => {
  let players = ConfigManager.get("players");
  for (let i = 0; i < ConfigManager.get("playerCount"); i++) {
    selectChallenge(currentMonsters, players[i]);
  }
};

export { selectChallenge, getFullChallengeList, selectChallengeForAllPlayers };
