import React, { useState } from "react";
import { useNavigate } from "react-router";
import InlineIcon from "../../components/base-components/inline-icon/InlineIcon";
import { getLocalizedString } from "../../localization/localization";
import ConfigManager from "../../utils/config-manager";
import mhwMonsterList from "../../assets/data/mhworld/monster-list.json";

import "./play.scss";

/**
 * Play page
 *
 * @returns {JSX.Element} the play page
 */
export default function Play() {
  const navigate = useNavigate();

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
          {mhwMonsterList.map((monster) => {
            return (
              <div key={monster.id} className="monster-card">
                <InlineIcon icon={"." + monster.key} className="monster-icon" />
                <div className="monster-name">
                  {getLocalizedString(["ui", "monsters", "mhw", monster.key])}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
