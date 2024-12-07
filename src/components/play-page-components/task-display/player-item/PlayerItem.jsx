import React from "react";
import { faMinus, faRotate } from "@fortawesome/free-solid-svg-icons";
import InlineIcon from "../../../base-components/inline-icon/InlineIcon";
import Tooltip from "../../../base-components/tooltip/Tooltip";
import ButtonBox from "../../../controll-components/button-box/ButtonBox";
import { getLocalizedString } from "../../../../localization/localization";

import "./PlayerItem.scss";

export default function PlayerItem({
  player,
  idx,
  onRerollPlayer,
  onRemovePlayer,
  playerCount,
  gameKey
}) {
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
      <div className="player-challenges">
        {player.challenges.map((challenge, index) => {
          return (
            <Tooltip
              key={index}
              id={player.name + challenge.id}
              className="challenge-tooltip"
              tooltipContent={getLocalizedString([
                "ui",
                "challenges",
                gameKey,
                challenge.key,
                "description",
              ])}
              disabled={false}
              direction="auto"
            >
              {getLocalizedString([
                "ui",
                "challenges",
                gameKey,
                challenge.key,
                "title",
              ])}
            </Tooltip>
          );
        })}
      </div>
      <div className="player-controls">
        <ButtonBox
          id={player.name + "-remove"}
          className="player-controll-button"
          disabled={playerCount <= 1}
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
          tooltip={getLocalizedString([
            "ui",
            "play",
            "task-display",
            "reroll-player",
          ])}
          tooltipDir="bottom"
          onClick={rerollPlayer}
        />
      </div>
    </div>
  );
}
