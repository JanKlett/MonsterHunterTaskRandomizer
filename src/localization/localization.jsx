import en_us from "./language-files/en_us.json";
import de from "./language-files/de.json";
import jp from "./language-files/jp.json";
import CookieManager from "../utils/cookie-manager";

const supportedLanguages = [
  {
    key: "us",
    value: "English (US)",
    icon: ".flagUS",
    dictionary: en_us,
  },
];
var language = supportedLanguages[0];
const languageListener = {};
const defaultLanguage = "en";

export function setLanguage(lang) {
  console.log("Setting language to " + lang);
  if (supportedLanguages.find((l) => l.key === lang) === undefined) {
    return Error("Language not supported");
  }

  language = supportedLanguages.find((l) => l.key === lang);
  supportedLanguages.forEach((lang) => {
    lang.value = getLocalizedString([
      "ui",
      "config",
      "language",
      "options",
      lang.key,
    ]);
  });
  CookieManager.setCookie("language", lang, 24 * 100);

  Object.keys(languageListener).forEach((listener) => {
    languageListener[listener]();
  });
}

export function getLanguage() {
  return { key: language.key, value: language.value, icon: language.icon };
}

export function setLanguageFromBrowser() {
  var lang = navigator.language || navigator.userLanguage;
  if (lang === "de") {
    setLanguage("de");
  } else if (lang === "en") {
    setLanguage("en");
  } else {
    setLanguage(defaultLanguage);
  }
}

export function setLanguageFromCookie() {
  var lang = CookieManager.getCookie("language");
  if (lang) {
    setLanguage(lang);
  } else {
    setLanguageFromBrowser();
  }
}

export function getSupportedLanguages() {
  return supportedLanguages.map((lang) => {
    return { key: lang.key, value: lang.value, icon: lang.icon };
  });
}

export function getLocalizedString(keys) {
  let dictionary = language.dictionary;

  for (let key of keys) {
    if (!dictionary[key]) {
      return keys.join("_");
    }
    dictionary = dictionary[key];
  }
  return dictionary;
}

export function addLanguageListener(key, callback) {
  console.log("Adding language listener: " + key);
  languageListener[key] = callback;
}

export function removeLanguageListener(key) {
  console.log("Removing language listener: " + key);
  delete languageListener[key];
}

export function adjustLineLengthForLanguage(maxLineLength) {
  if (language.key === "jp") {
    return Math.floor(maxLineLength / 2.5);
  }
  if (language.key === "ch") {
    return Math.floor(maxLineLength / 2.5);
  }
  return maxLineLength;
}