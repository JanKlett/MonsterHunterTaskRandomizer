import React, { useState } from "react";

import CookieManager from "../../../utils/cookie-manager";
import SelectionBox from "../../controll-components/selection-box/SelectionBox";
import { getLocalizedString } from "../../../localization/localization";

import "./ThemeSwitcher.scss";

/**
 * Theme switcher component
 * @returns {JSX.Element} the theme switcher
 */
export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(
    CookieManager.getCookie("theme") || "dark-mode"
  );
  const themes = [
    {
      value: getLocalizedString(["ui", "config", "theme", "options", "dark"]),
      key: "dark-mode",
    },
    {
      value: getLocalizedString(["ui", "config", "theme", "options", "light"]),
      key: "light-mode",
    },
  ];

  const changeTheme = (e) => {
    const theme = e.target.value;
    setTheme(theme);
    CookieManager.setCookie("theme", theme);
    document.documentElement.className = theme;
  };

  return (
    <SelectionBox
      className={"theme-switcher"}
      title={getLocalizedString(["ui", "config", "theme", "label"])}
      icon={"fa-solid fa-palette"}
      options={themes}
      defaultValue={theme}
      onChange={changeTheme}
    />
  );
}
