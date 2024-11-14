import React, { useState } from "react";
import { useNavigate } from "react-router";
import ButtonBox from "../../components/controll-components/button-box/ButtonBox";
import NumberBox from "../../components/controll-components/number-box/NumberBox";
import Checkbox from "../../components/controll-components/check-box/Checkbox";
import SingleCard from "../../layouts/single-card/SingleCard";
import TextBlock from "../../components/base-components/text-block/TextBlock";
import Popup from "../../components/layout-components/popup/Popup";
import ConfigManager from "../../utils/config-manager";
import { getLocalizedString } from "../../localization/localization";

import "./home.scss";

/**
 * Home page
 *
 * @returns {JSX.Element} the home page
 */
export default function Home() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedPlayerCount, setSelectedPlayerCount] = useState(1);
  const [saveConfig, setSaveConfig] = useState(false);
  const navigate = useNavigate();

  const onGameSelect = (game) => {
    setSelectedGame(game);
    ConfigManager.set("game", game);
    if (ConfigManager.load()) {
      setSelectedPlayerCount(ConfigManager.config.playerCount);
      setSaveConfig(ConfigManager.config.saveConfig);
      onStartGame();
    } else {
      setPopupOpen(true);
      setSelectedPlayerCount(1);
      setSaveConfig(false);
    }
  };

  const onPopupClose = () => {
    setPopupOpen(false);
    setSelectedGame(null);
    ConfigManager.reset();
  };

  const onPlayerCountChange = (event) => {
    setSelectedPlayerCount(event.target.value);
    ConfigManager.set("playerCount", event.target.value);
  };

  const toggleConfigSave = () => {
    ConfigManager.setSaveConfig(!saveConfig);
    setSaveConfig(!saveConfig);
  };

  const onStartGame = () => {
    navigate(`/player?game=${selectedGame}`);
  };

  return (
    <React.Fragment>
      <div className={"content-block page-content home"}>
        <h1 className="page-title">{getLocalizedString(["ui", "title"])}</h1>
        <SingleCard
          className="home-card"
          title={getLocalizedString(["ui", "main", "title"])}
        >
          <TextBlock
            title={getLocalizedString(["ui", "main", "description", "title"])}
            localizationKeys={["ui", "main", "description", "text1"]}
            maxLineLength={100}
            hasDivider={true}
            className="home-text-block"
          />
          <TextBlock
            localizationKeys={["ui", "main", "description", "text2"]}
            maxLineLength={100}
            hasDivider={false}
            className="home-text-block"
          />
          <TextBlock
            localizationKeys={["ui", "main", "description", "text3"]}
            maxLineLength={100}
            hasDivider={false}
            className="home-text-block"
          />
          <TextBlock
            localizationKeys={["ui", "main", "description", "text4"]}
            maxLineLength={100}
            hasDivider={false}
            className="home-text-block"
          />
          <div className="home-button-container">
            <h3 className="home-button-box-title">
              {getLocalizedString(["ui", "main", "games", "title"])}
            </h3>
            <div className="home-button-box-grid">
              <ButtonBox
                className="home-game-button"
                title=""
                tooltip={getLocalizedString(["ui", "main", "games", "mhworld"])}
                icon={".mhworld"}
                onClick={() => {
                  onGameSelect("mhworld");
                }}
              />
              <ButtonBox
                className="home-game-button"
                title=""
                tooltip={getLocalizedString(["ui", "main", "games", "mhrise"])}
                icon={".mhrise"}
                onClick={() => {
                  onGameSelect("mhrise");
                }}
              />
              <ButtonBox
                className="home-game-button"
                title=""
                tooltip={getLocalizedString([
                  "ui",
                  "main",
                  "games",
                  "mhworldiceborne",
                ])}
                icon={".mhworldiceborne"}
                onClick={() => {
                  onGameSelect("mhworldiceborne");
                }}
              />
              <ButtonBox
                className="home-game-button"
                title=""
                tooltip={getLocalizedString([
                  "ui",
                  "main",
                  "games",
                  "mhrisesunbreak",
                ])}
                icon={".mhrisesunbreak"}
                onClick={() => {
                  onGameSelect("mhrisesunbreak");
                }}
              />
            </div>
          </div>
        </SingleCard>
        <Popup
          isVisible={popupOpen}
          showCloseButton={true}
          onClose={onPopupClose}
          className="home-player-popup"
          title={getLocalizedString(["ui", "main", "player-popup", "title"])}
        >
          <div className="home-player-popup-content">
            <NumberBox
              className="popup-player-count"
              label={getLocalizedString([
                "ui",
                "main",
                "player-popup",
                "input-label",
              ])}
              value={selectedPlayerCount}
              minValue={1}
              maxValue={4}
              onChange={onPlayerCountChange}
            />
            <TextBlock
              className="home-player-popup-text"
              localizationKeys={["ui", "main", "player-popup", "description"]}
              maxLineLength={40}
              hasDivider={false}
            />
            <Checkbox
              className="popup-player-checkbox"
              label={getLocalizedString([
                "ui",
                "main",
                "player-popup",
                "save-config",
              ])}
              checked={saveConfig}
              onChange={toggleConfigSave}
              dir={"rtl"}
            />
            <ButtonBox
              className="popup-start-button"
              title={getLocalizedString([
                "ui",
                "main",
                "player-popup",
                "start-button",
              ])}
              onClick={onStartGame}
            />
          </div>
        </Popup>
      </div>
    </React.Fragment>
  );
}