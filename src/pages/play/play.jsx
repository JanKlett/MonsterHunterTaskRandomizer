import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import ConfigDrawer from "../../components/play-page-components/config-drawer/ConfigDrawer";
import TaskDisplay from "../../components/play-page-components/task-display/TaskDisplay";
import { getLocalizedString } from "../../localization/localization";
import ConfigManager, { weaponClasses } from "../../utils/config-manager";
import {
  getFullMonsterList,
  resetMonsterList,
  selectMonster,
  selectSecondMonster,
} from "../../utils/monster-randomizer-logic";
import {
  selectWeaponForPlayer,
  selectWeaponForAllPlayers,
} from "../../utils/weapon-randomizer-logic";
import {
  selectChallenge,
  selectChallengeForAllPlayers,
} from "../../utils/challenges-randomizer-logic";

import "./play.scss";

/**
 * Play page
 *
 * @returns {JSX.Element} the play page
 */
export default function Play() {
  const navigate = useNavigate();
  const [baseMonsterList, setBaseMonsterList] = useState([]);
  const [dlcMonsterList, setDlcMonsterList] = useState([]);
  const [currentMonsters, setCurrentMonsters] = useState([null, null]);
  const [ignored, forceUpdate] = useState(false);

  useEffect(() => {
    if (ConfigManager.get("game") === null) {
      let url = new URL(window.location.href);
      const gameParam = url.href.split("=")[1];
      if (!ConfigManager.setGame(gameParam)) {
        console.log("no config found");
        ConfigManager.removeSavedConfig();
        ConfigManager.reset();
        navigate("/");
        return;
      }
    }
    forceUpdate(!ignored);

    // Sort monsters into base and dlc for monster selection
    let dlcMonsters = [];
    let baseMonsters = [];
    for (let monster of getFullMonsterList()) {
      if (monster.isDLC) {
        dlcMonsters.push(monster);
      } else {
        baseMonsters.push(monster);
      }
    }
    setBaseMonsterList(baseMonsters);
    setDlcMonsterList(dlcMonsters);

    // Do the initial setup
    rerollAll();
  }, []);

  const toggleMonster = (monsterId, state) => {
    ConfigManager.toggleMonster(monsterId, state);
    resetMonsterList();
  };

  const addPlayer = () => {
    ConfigManager.addPlayer();
    selectWeaponForPlayer(
      ConfigManager.get("players")[ConfigManager.get("playerCount") - 1]
    );
    selectChallenge(
      currentMonsters,
      ConfigManager.get("players")[ConfigManager.get("playerCount") - 1]
    );
    forceUpdate(!ignored);
  };

  const removePlayer = (idx) => {
    ConfigManager.removePlayerByIdx(idx);
    forceUpdate(!ignored);
  };

  const rerollPlayer = (player) => {
    selectWeaponForPlayer(player);
    selectChallenge(currentMonsters, player);
    forceUpdate(!ignored);
  };

  const rerollMonsters = () => {
    let firstMonster = selectMonster();
    let secondMonster = selectSecondMonster(firstMonster);
    setCurrentMonsters([firstMonster, secondMonster]);
    return [firstMonster, secondMonster];
  };

  const rerollAll = () => {
    let monsters = rerollMonsters();
    selectWeaponForAllPlayers();
    selectChallengeForAllPlayers(monsters);

    forceUpdate(!ignored);
  };

  const changeDoubleMonsterChance = (value) => {
    ConfigManager.set("doubleMonsterChance", value / 100);
  };

  const onPlayerChange = (player) => {
    ConfigManager.save();
    forceUpdate(!ignored);
  };

  return (
    <React.Fragment>
      <div className={"content-block page-content play"}>
        <h1 className="page-title">{getLocalizedString(["ui", "title"])}</h1>
        <TaskDisplay
          addPlayer={addPlayer}
          removePlayer={removePlayer}
          rerollPlayer={rerollPlayer}
          rerollMonsters={rerollMonsters}
          rerollAll={rerollAll}
          players={ConfigManager.get("players")}
          playerCount={ConfigManager.get("playerCount")}
          currentMonsters={currentMonsters}
          gameKey={ConfigManager.get("game")}
        />

        <ConfigDrawer
          baseMonsterList={baseMonsterList}
          dlcMonsterList={dlcMonsterList}
          toggleMonster={toggleMonster}
          changeDoubleMonsterChance={changeDoubleMonsterChance}
          doubelMonsterChance={ConfigManager.get("doubleMonsterChance")}
          players={ConfigManager.get("players")}
          playerCount={ConfigManager.get("playerCount")}
          onPlayerChange={onPlayerChange}
          weaponList={weaponClasses}
          isDLC={ConfigManager.get("dlc")}
        />
      </div>
    </React.Fragment>
  );
}
