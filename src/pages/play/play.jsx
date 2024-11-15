import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import InlineIcon from "../../components/base-components/inline-icon/InlineIcon";
import Drawer from "../../components/layout-components/drawer/Drawer";
import { getLocalizedString } from "../../localization/localization";
import ConfigManager from "../../utils/config-manager";
import {
  getFullMonsterList,
  getMonsterList,
  resetMonsterList,
} from "../../utils/randomizer-logic";

import "./play.scss";
import CheckBox from "../../components/controll-components/check-box/Checkbox";

/**
 * Play page
 *
 * @returns {JSX.Element} the play page
 */
export default function Play() {
  const navigate = useNavigate();
  const [monsterList, setMonsterList] = useState(getMonsterList());
  const [baseMonsterList, setBaseMonsterList] = useState(getMonsterList());
  const [dlcMonsterList, setDlcMonsterList] = useState(getFullMonsterList());
  const [drawerOpen, setDrawerOpen] = useState(true);

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

    // Sort monsters into base and dlc for easier display
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
        <div className="monster-grid">
          {monsterList.map((monster) => {
            return (
              <MonsterItem
                key={monster.id}
                monster={monster}
                toggleMonster={toggleMonster}
              />
            );
          })}
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
          <div className="monster-grid">
            {baseMonsterList.map((monster) => {
              return (
                <MonsterItem
                  key={monster.id}
                  monster={monster}
                  toggleMonster={toggleMonster}
                />
              );
            })}
          </div>
          <div className="monster-grid">
            {dlcMonsterList.map((monster) => {
              return (
                <MonsterItem
                  key={monster.id}
                  monster={monster}
                  toggleMonster={toggleMonster}
                />
              );
            })}
          </div>
        </Drawer>
      </div>
    </React.Fragment>
  );
}

const MonsterItem = ({ monster, toggleMonster }) => {
  return (
    <div
      key={monster.id}
      className="monster-card"
      title={getLocalizedString(["ui", "monsters", "mhw", monster.key])}
    >
      <InlineIcon icon={"." + monster.key} className="monster-icon" />
      <div className="monster-name">
        {getLocalizedString(["ui", "monsters", "mhw", monster.key])}
      </div>
      <CheckBox
        checked={ConfigManager.isMonsterAllowed(monster.id)}
        onChange={(state) => toggleMonster(monster.id, state)}
        className="monster-checkbox"
        dir="rtl"
      />
    </div>
  );
};
