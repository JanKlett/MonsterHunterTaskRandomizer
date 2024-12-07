import React from "react";
import InlineIcon from "../../base-components/inline-icon/InlineIcon";
import Tooltip from "../../base-components/tooltip/Tooltip";
import CheckBox from "../../controll-components/check-box/CheckBox";
import ConfigManager from "../../../utils/config-manager";
import { getLocalizedString } from "../../../localization/localization";

import "./MonsterItem.scss";

export default function MonsterItem({ monster, toggleMonster, hasCheckBox }) {
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
}
