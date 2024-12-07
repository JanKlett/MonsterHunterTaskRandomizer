import React, { useState } from "react";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Drawer from "../../layout-components/drawer/Drawer";
import MonsterConfig from "./monster-config/MonsterConfig";
import PlayerConfig from "./player-config/PlayerConfig";
import { getLocalizedString } from "../../../localization/localization";

import "./ConfigDrawer.scss";

export default function ConfigDrawer({
  baseMonsterList,
  dlcMonsterList,
  toggleMonster,
  doubelMonsterChance,
  changeDoubleMonsterChance,
  players,
  playerCount,
  onPlayerChange,
  weaponList,
  isDLC,
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
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
      <PlayerConfig 
        players={players} 
        playerCount={playerCount}
        onPlayerChange={onPlayerChange}
        weaponList={weaponList}
      />
      <MonsterConfig
        baseMonsterList={baseMonsterList}
        dlcMonsterList={dlcMonsterList}
        toggleMonster={toggleMonster}
        doubelMonsterChance={doubelMonsterChance}
        changeDoubleMonsterChance={changeDoubleMonsterChance}
        isDLC={isDLC}
      />
    </Drawer>
  );
}
