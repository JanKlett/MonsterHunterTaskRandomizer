import React from "react";
import SliderBox from "../../../controll-components/slider-box/SliderBox";
import MonsterItem from "../../monster-item/MonsterItem";
import { getLocalizedString } from "../../../../localization/localization";

import "./MonsterConfig.scss";

export default function MonsterConfig({
  baseMonsterList,
  dlcMonsterList,
  toggleMonster,
  doubelMonsterChance,
  changeDoubleMonsterChance,
  isDLC}
) {

  return (
    <div className="monster-config">
      <h3 className="monster-config-title">
        {getLocalizedString([
          "ui",
          "play",
          "config-drawer",
          "monster-config",
          "title",
        ])}
      </h3>
      <div className="monster-config-double-chance-control">
        <SliderBox
          className="double-monster-chance-slider"
          id="double-monster-chance-slider"
          title={getLocalizedString([
            "ui",
            "play",
            "config-drawer",
            "monster-config",
            "double-monster-chance",
          ])}
          onValueChanged={changeDoubleMonsterChance}
          defaultValue={doubelMonsterChance * 100}
          disabled={false}
          min={0}
          max={100}
          unit="%"
        />
      </div>
      <p className="monster-config-selection-description">
        {getLocalizedString([
          "ui",
          "play",
          "config-drawer",
          "monster-config",
          "description",
        ])}
      </p>
      <h4 className="monster-config-selection-title">
        {getLocalizedString([
          "ui",
          "play",
          "config-drawer",
          "monster-config",
          "base-monsters",
        ])}
      </h4>
      <div className="monster-config-grid">
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

      {isDLC && (
        <>
          <h4 className="monster-config-selection-title">
            {getLocalizedString([
              "ui",
              "play",
              "config-drawer",
              "monster-config",
              "dlc-monsters",
            ])}
          </h4>
          <div className="monster-config-grid">
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
  );
}
