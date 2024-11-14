import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useScreenSizeClass } from "./utils/media-query";
import CookieManager from "./utils/cookie-manager";
import SelectionBox from "./components/controll-components/selection-box/SelectionBox";
import Loading from "./components/page-components/loading/loading";
import ThemeSwitcher from "./components/page-components/theme-switcher/ThemeSwitcher";
import routes from "./app-routes";
import {
  addLanguageListener,
  getLanguage,
  getLocalizedString,
  getSupportedLanguages,
  setLanguage,
  setLanguageFromCookie
} from "./localization/localization";

import './App.css'
import "./themes/dark-mode.css";
import "./themes/light-mode.css";


document.documentElement.className = CookieManager.getCookie("theme")
  ? CookieManager.getCookie("theme")
  : "dark-mode";

setLanguageFromCookie();

function App() {
  const screenSizeClass = useScreenSizeClass();
  const [language, setLocalLanguage] = useState(getLanguage().key);
  
  useEffect(() => {
    addLanguageListener("app", () => {
      console.log("App language changed detected to " + getLanguage().key);
      setLocalLanguage(getLanguage().key);

    });
  }, []);

  return (
    <Router future={{ v7_startTransition: true }}>
      <div className={`app ${screenSizeClass}`}>
        <SelectionBox
          icon={""}
          className="language-selection-box"
          title={getLocalizedString(["ui", "config", "language", "label"])}
          options={getSupportedLanguages()}
          onChange={(event) => {
            setLanguage(event.target.value);
          }}
          defaultValue={language}
        />
        <ThemeSwitcher></ThemeSwitcher>
        <Routes>
          {routes.map(({ path, element: Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <React.Suspense fallback={<Loading />}>
                  {<Component />}
                </React.Suspense>
              }
            />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
