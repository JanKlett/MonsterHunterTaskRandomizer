import ConfigManager from "./config-manager";


const selectWeaponForPlayer = (player) => {
  let weaponList = getWeaponListForPlayer(player);
  let selectedWeapon =
    weaponList[Math.floor(Math.random() * weaponList.length)];
  while (
    player.weapon === selectedWeapon &&
    Math.random() < ConfigManager.get("rerollSameWeaponChance")
  ) {
    selectedWeapon = weaponList[Math.floor(Math.random() * weaponList.length)];
  }

  ConfigManager.setPlayerData(player, "weapon", selectedWeapon);
  return selectedWeapon;
};

const getWeaponListForPlayer = (player) => {
  let weaponList = ConfigManager.getWeaponClasses();
  let allowedWeapons = [];
  for (let i = 0; i < player.allowedWeapons.length; i++) {
    if (player.allowedWeapons[i]) {
      allowedWeapons.push(weaponList[i]);
    }
  }
  return allowedWeapons;
};

const selectWeaponForAllPlayers = () => {
  let players = ConfigManager.get("players");
  for (let i = 0; i < ConfigManager.get("playerCount"); i++) {
    selectWeaponForPlayer(players[i]);
  }
};

export { selectWeaponForAllPlayers, selectWeaponForPlayer };
