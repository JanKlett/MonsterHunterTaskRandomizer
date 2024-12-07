import React from "react";
import { faPlus, faMinus, faRotate } from "@fortawesome/free-solid-svg-icons";
import ButtonBox from "../../controll-components/button-box/ButtonBox";
import MonsterItem from "../monster-item/MonsterItem";
import PlayerItem from "./player-item/PlayerItem";
import { getLocalizedString } from "../../../localization/localization";

import "./TaskDisplay.scss";

export default function TaskDisplay({
  currentMonsters,
  players,
  playerCount,
  rerollMonsters,
  removePlayer,
  rerollPlayer,
  addPlayer,
  rerollAll,
  gameKey,
}) {
  return (
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
        {players.map((player, index) => {
          if (index < playerCount) {
            return (
              <PlayerItem
                key={index}
                player={player}
                idx={index}
                onRemovePlayer={removePlayer}
                onRerollPlayer={rerollPlayer}
                playerCount={playerCount}
                gameKey={gameKey}
              />
            );
          } else if (index === playerCount) {
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
        title={getLocalizedString(["ui", "play", "task-display", "reroll-all"])}
        id="reroll-all"
        onClick={rerollAll}
      />
    </div>
  );
}
