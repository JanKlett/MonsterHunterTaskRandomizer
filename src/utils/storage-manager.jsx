import config from "../app-config";

/**
 * Responsible for managing local and session storage.
 *
 * Allows to save, load and delete storages.
 *
 */
let StorageManager = {
  storageTypes: {
    local: localStorage,
    session: sessionStorage,
  },
  storageKeys: {
    local: [],
    session: [],
  },
  arrayDelimiter: ";",
  save: function (storageName, storageValue, storageType = "local") {
    this.storageTypes[storageType].setItem(storageName, storageValue);
    if (!this.storageKeys[storageType].includes(storageName)) {
      this.storageKeys[storageType].push(storageName);
    }
  },
  saveAsArray: function (storageName, storageValue, storageType = "local", delimiter = this.arrayDelimiter) {
    return this.save(storageName, storageValue.join(delimiter), storageType);
  },
  load: function (storageName, storageType = "local") {
    return this.storageTypes[storageType].getItem(storageName);
  },
  loadAsArray: function (storageName, storageType = "local") {
    let data = this.load(storageName, storageType);
    if (!data) {
      return [];
    }
    return data.split(this.arrayDelimiter);
  },
  deleteStorage: function (storageName, storageType = "local") {
    this.storageTypes[storageType].removeItem(storageName);
    let idx = this.storageKeys[storageType].indexOf(storageName);
    if (idx !== -1) {
      this.storageKeys[storageType].splice(idx, 1);
    }
  },
  clearStorage: function (storageType = "local") {
    this.storageKeys[storageType].forEach((key) => {
      this.storageTypes[storageType].removeItem(key);
    });
    this.storageKeys[storageType] = [];
  },
  isStored: function (storageName, storageType = "local") {
    return this.storageKeys[storageType].includes(storageName);
  },
};

export default StorageManager;
