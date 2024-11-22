import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import InlineIcon from "../../components/base-components/inline-icon/InlineIcon";
import Tooltip from "../../components/base-components/tooltip/Tooltip";
import Drawer from "../../components/layout-components/drawer/Drawer";
import { getLocalizedString } from "../../localization/localization";
import ConfigManager from "../../utils/config-manager";
import {
  getFullMonsterList,
  getMonsterList,
  resetMonsterList,
  selectMonster,
  selectSecondMonster,
} from "../../utils/monster-randomizer-logic";

import "./play.scss";
import CheckBox from "../../components/controll-components/check-box/Checkbox";
import config from "../../app-config";

/**
 * Play page
 *
 * @returns {JSX.Element} the play page
 */
export default function Play() {
  const navigate = useNavigate();
  const [monsterList, setMonsterList] = useState(getMonsterList());
  const [baseMonsterList, setBaseMonsterList] = useState([]);
  const [dlcMonsterList, setDlcMonsterList] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentMonsters, setCurrentMonsters] = useState([null, null]);

  useEffect(() => {
    if (ConfigManager.get("game") === null) {
      let url = new URL(window.location.href);
      const gameParam = url.href.split("=")[1];
      if (!ConfigManager.setGame(gameParam)) {
        console.log("no config found");
        ConfigManager.removeSavedConfig();
        navigate("/");
      } else {
        setMonsterList(getMonsterList());
      }
    }

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

    // Set the initial monsters
    let firstMonster = selectMonster();
    let secondMonster = selectSecondMonster(firstMonster);
    setCurrentMonsters([firstMonster, secondMonster]);
  }, []);

  const toggleMonster = (monsterId, state) => {
    ConfigManager.toggleMonster(monsterId, state);
    resetMonsterList();
    setMonsterList(getMonsterList());
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <React.Fragment>
      <div className={"content-block page-content play"}>
        <h1 className="page-title">{getLocalizedString(["ui", "title"])}</h1>
        <div className="weapon-list">
          {ConfigManager.getWeaponClasses().map((weaponClass, index) => {
            return (
              <InlineIcon
                key={index}
                icon={"." + weaponClass}
                className="weapon-icon"
              />
            );
          })}
        </div>
        <div className="task-display">
          <div className="current-monster">
            {currentMonsters[0] && <MonsterItem monster={currentMonsters[0]} />}
            {currentMonsters[1] && <MonsterItem monster={currentMonsters[1]} />}
          </div>
          <div className="player-list">
            {ConfigManager.get("players").map((player, index) => {
              if (index < ConfigManager.get("playerCount")) {
                return (
                  <div key={index} className="player">
                    <p className="player-title">
                      {player.name}
                    </p>
                    <div className="player-weapon">
                      <InlineIcon
                        icon={"." + ConfigManager.getWeaponClass(player.weapon)}
                        className="weapon-icon"
                      />
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <Drawer
          mode="overlay"
          direction="horizontal"
          className="config-drawer"
          opened={drawerOpen}
          transition={true}
          openIcon={faCaretLeft}
          closeIcon={faCaretRight}
          hasButtonLine={true}
          onClick={toggleDrawer}
        >
          <h2 className="config-drawer-title">
            {getLocalizedString(["ui", "play", "config-drawer", "title"])}
          </h2>
          <div className="monster-selection">
            <h3 className="monster-selection-title">
              {getLocalizedString([
                "ui",
                "play",
                "config-drawer",
                "monster-selection",
                "title",
              ])}
            </h3>
            <p className="monster-selection-description">
              {getLocalizedString([
                "ui",
                "play",
                "config-drawer",
                "monster-selection",
                "description",
              ])}
            </p>
            <h4 className="monster-selection-subtitle">
              {getLocalizedString([
                "ui",
                "play",
                "config-drawer",
                "monster-selection",
                "base-monsters",
              ])}
            </h4>
            <div className="monster-grid">
              {baseMonsterList.map((monster) => {
                return (
                  <MonsterItem
                    key={monster.id}
                    monster={monster}
                    toggleMonster={toggleMonster}
                    hasCheckBox={true}
                  />
                );
              })}
            </div>

            {ConfigManager.get("dlc") && (
              <>
                <h4 className="monster-selection-subtitle">
                  {getLocalizedString([
                    "ui",
                    "play",
                    "config-drawer",
                    "monster-selection",
                    "dlc-monsters",
                  ])}
                </h4>
                <div className="monster-grid">
                  {dlcMonsterList.map((monster) => {
                    return (
                      <MonsterItem
                        key={monster.id}
                        monster={monster}
                        toggleMonster={toggleMonster}
                        hasCheckBox={true}
                      />
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </Drawer>
      </div>
    </React.Fragment>
  );
}

const MonsterItem = ({ monster, toggleMonster, hasCheckBox }) => {
  return (
    <Tooltip
      key={monster.id}
      id={monster.id}
      className="monster-card"
      tooltipContent={getLocalizedString([
        "ui",
        "monsters",
        ConfigManager.get("game"),
        monster.key,
      ])}
      disabled={false}
    >
      <InlineIcon icon={"." + monster.key} className="monster-icon" />

      {hasCheckBox && (
        <CheckBox
          checked={ConfigManager.isMonsterAllowed(monster.id)}
          onChange={(state) => toggleMonster(monster.id, state)}
          className="monster-checkbox"
          dir="rtl"
        />
      )}
    </Tooltip>
  );
};
