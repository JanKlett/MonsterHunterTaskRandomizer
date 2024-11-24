import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  faCaretLeft,
  faCaretRight,
  faPlus,
  faMinus,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";
import InlineIcon from "../../components/base-components/inline-icon/InlineIcon";
import Tooltip from "../../components/base-components/tooltip/Tooltip";
import Drawer from "../../components/layout-components/drawer/Drawer";
import ButtonBox from "../../components/controll-components/button-box/ButtonBox";
import CheckBox from "../../components/controll-components/check-box/Checkbox";
import { getLocalizedString } from "../../localization/localization";
import ConfigManager from "../../utils/config-manager";
import {
  getFullMonsterList,
  getMonsterList,
  resetMonsterList,
  selectMonster,
  selectSecondMonster,
} from "../../utils/monster-randomizer-logic";
import {
  selectWeaponForPlayer,
  selectWeaponForAllPlayers,
} from "../../utils/weapon-randomizer-logic";
import config from "../../app-config";

import "./play.scss";

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
  const [ignored, forceUpdate] = useState(false);

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

    // Do the initial setup
    rerollAll();
  }, []);

  const toggleMonster = (monsterId, state) => {
    ConfigManager.toggleMonster(monsterId, state);
    resetMonsterList();
    setMonsterList(getMonsterList());
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const addPlayer = () => {
    ConfigManager.addPlayer();
    selectWeaponForPlayer(
      ConfigManager.get("players")[ConfigManager.get("playerCount") - 1]
    );
    forceUpdate(!ignored);
  };

  const removePlayer = (idx) => {
    ConfigManager.removePlayer(idx);
    forceUpdate(!ignored);
  };

  const rerollPlayer = (player) => {
    selectWeaponForPlayer(player);
    forceUpdate(!ignored);
  };

  const rerollMonsters = () => {
    let firstMonster = selectMonster();
    let secondMonster = selectSecondMonster(firstMonster);
    setCurrentMonsters([firstMonster, secondMonster]);
  };

  const rerollAll = () => {
    rerollMonsters();
    selectWeaponForAllPlayers();
    
    forceUpdate(!ignored);
  };

  return (
    <React.Fragment>
      <div className={"content-block page-content play"}>
        <h1 className="page-title">{getLocalizedString(["ui", "title"])}</h1>
        {/* <div className="weapon-list">
          {ConfigManager.getWeaponClasses().map((weaponClass, index) => {
            return (
              <Tooltip
                key={index}
                id={weaponClass+"-tooltip"}
                className="weapon-tooltip"
                tooltipContent={getLocalizedString([
                  "ui",
                  "game-config",
                  "weapon-classes",
                  weaponClass,
                ])}
                disabled={false}
              >
                <InlineIcon
                  key={index}
                  icon={"." + weaponClass}
                  className="weapon-icon"
                />
              </Tooltip>
            );
          })}
        </div> */}
        <div className="task-display">
          <h2 className="task-display-title">
            {getLocalizedString(["ui", "play", "task-display", "title"])}
          </h2>
          <div className="current-monster">
            {currentMonsters[0] && <MonsterItem monster={currentMonsters[0]} />}
            {currentMonsters[1] && <MonsterItem monster={currentMonsters[1]} />}
            <ButtonBox
              className="monster-reroll-button"
              disabled={false}
              icon={faRotate}
              tooltip={getLocalizedString([
                "ui",
                "play",
                "task-display",
                "reroll-monster",
              ])}
              id="reroll-monster"
              onClick={rerollMonsters}
            />
          </div>
          <div className="player-list">
            {ConfigManager.get("players").map((player, index) => {
              if (index < ConfigManager.get("playerCount")) {
                return (
                  <PlayerItem
                    key={index}
                    player={player}
                    idx={index}
                    onRemovePlayer={removePlayer}
                    onRerollPlayer={rerollPlayer}
                  />
                );
              } else if (index === ConfigManager.get("playerCount")) {
                return (
                  <div key={index} className="player-card player-button">
                    <ButtonBox
                      className="add-player-button"
                      disabled={false}
                      icon={faPlus}
                      title={getLocalizedString([
                        "ui",
                        "play",
                        "task-display",
                        "add-player",
                      ])}
                      onClick={addPlayer}
                    />
                  </div>
                );
              }
            })}
          </div>
          <ButtonBox
            className="reroll-all-button"
            disabled={false}
            title={getLocalizedString([
              "ui",
              "play",
              "task-display",
              "reroll-all",
            ])}
            id="reroll-all"
            onClick={rerollAll}
          />
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
      direction="auto"
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

const PlayerItem = ({ player, idx, onRerollPlayer, onRemovePlayer }) => {
  const rerollPlayer = () => {
    onRerollPlayer(player);
  };

  const removePlayer = () => {
    onRemovePlayer(idx);
  };

  return (
    <div className="player-card">
      <div className="player-weapon">
        {player.weapon !== undefined && player.weapon !== -1 && (
          <Tooltip
            id={player.name + player.weapon}
            className="weapon-tooltip"
            tooltipContent={getLocalizedString([
              "ui",
              "game-config",
              "weapon-classes",
              player.weapon,
            ])}
            disabled={false}
            direction="auto"
          >
            <InlineIcon icon={"." + player.weapon} className="weapon-icon" />
          </Tooltip>
        )}
      </div>
      <p className="player-name">{player.name}</p>
      <div className="player-challenges"></div>
      <div className="player-controls">
        <ButtonBox
          id={player.name + "-remove"}
          className="player-controll-button"
          disabled={false}
          icon={faMinus}
          tooltip={getLocalizedString([
            "ui",
            "play",
            "task-display",
            "remove-player",
          ])}
          tooltipDir="top"
          onClick={removePlayer}
        />
        <ButtonBox
          id={player.name + "-reroll"}
          className="player-controll-button"
          disabled={false}
          icon={faRotate}
          tooltip={getLocalizedString(["ui", "play", "task-display", "reroll-player"])}
          tooltipDir="bottom"
          onClick={rerollPlayer}
        />
      </div>
    </div>
  );
};
