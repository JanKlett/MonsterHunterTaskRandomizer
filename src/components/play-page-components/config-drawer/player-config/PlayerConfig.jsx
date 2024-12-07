import React from "react";
import { getLocalizedString } from "../../../../localization/localization";

import "./PlayerConfig.scss";
import ConfigPlayerItem from "./config-player-item/ConfigPlayerItem";

export default function PlayerConfig({
  players,
  playerCount,
  onPlayerChange,
  weaponList,
}) {
  return (
    <div className="player-config">
      <h3 className="player-config-title">
        {getLocalizedString([
          "ui",
          "play",
          "config-drawer",
          "player-config",
          "title",
        ])}
      </h3>
      {players.map((player, idx) => {
        if (idx >= playerCount) {
          return null;
        } else {
          return (
            <ConfigPlayerItem
              key={idx}
              idx={idx}
              player={player}
              onPlayerChange={onPlayerChange}
              weaponList={weaponList}
            />
          );
        }
      })}
    </div>
  );
}
