import React, { useState, useEffect } from "react";
import TextInput from "../../../../controll-components/text-input/TextInput";
import CheckBox from "../../../../controll-components/check-box/CheckBox";
import InlineIcon from "../../../../base-components/inline-icon/InlineIcon";
import Tooltip from "../../../../base-components/tooltip/Tooltip";
import { getLocalizedString } from "../../../../../localization/localization";

import "./ConfigPlayerItem.scss";
import SliderBox from "../../../../controll-components/slider-box/SliderBox";

export default function ConfigPlayerItem({
  player,
  onPlayerChange,
  weaponList,
  idx,
}) {
  const [playerName, setPlayerName] = useState(player.name);
  const onChange = (value, key) => {
    player[key] = value;
    onPlayerChange(player);
  };
  const onWeaponToggle = (value, idx) => {
    player.allowedWeapons[idx] = value;
    onPlayerChange(player);
  };

  const allowToggle = (id) => {
    let onWeaponRemaining =
      player.allowedWeapons.filter((weapon) => weapon).length > 1;
    return !onWeaponRemaining && player.allowedWeapons[id];
  };

  useEffect(() => {
    setPlayerName(player.name);
  }, [player.name]);

  return (
    <div className="player-config-player">
      <TextInput
        className="player-config-name"
        label={getLocalizedString([
          "ui",
          "play",
          "config-drawer",
          "player-config",
          "player-name",
        ])}
        value={playerName}
        onChange={(value) => {
          onChange(value, "name");
        }}
      />
      <div className="player-config-allowed-weapons">
        <h4 className="player-config-allowed-weapons-title">
          {getLocalizedString([
            "ui",
            "play",
            "config-drawer",
            "player-config",
            "allowed-weapons",
          ])}
        </h4>
        <div className="player-config-allowed-weapons-list">
          {weaponList.map((weapon, id) => {
            return (
              <Tooltip
                key={weapon + idx}
                id={weapon + idx}
                className="weapon-card"
                tooltipContent={getLocalizedString([
                  "ui",
                  "game-config",
                  "weapon-classes",
                  weapon,
                ])}
                disabled={false}
                direction="top"
              >
                <InlineIcon icon={"." + weapon} className="weapon-icon" />
                <CheckBox
                  checked={player.allowedWeapons[id]}
                  onChange={(state) => onWeaponToggle(state, id)}
                  className="weapon-checkbox"
                  disabled={allowToggle(id)}
                  dir="rtl"
                />
              </Tooltip>
            );
          })}
        </div>
      </div>
      <div className="player-config-double-challenge">
        <SliderBox
          className="double-challenge-slider"
          id={"double-challenge-slider" + idx}
          title={getLocalizedString([
            "ui",
            "play",
            "config-drawer",
            "player-config",
            "double-challenge-chance",
          ])}
          onValueChanged={(value) =>
            onChange(value / 100, "doubleChallengeChance")
          }
          defaultValue={player.doubleChallengeChance * 100}
          disabled={false}
          unit="%"
          min={0}
          max={100}
        />
      </div>
    </div>
  );
}
