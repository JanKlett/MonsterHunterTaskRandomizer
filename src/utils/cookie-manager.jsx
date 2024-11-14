import config from "../app-config";

/**
 * Responsible for managing cookies.
 * 
 * Allows to set, get and delete cookies.
 * 
 * @property {Function} setCookie Sets a cookie with the given name, value and time till expire.
 * @property {Function} getCookie Gets the value of the cookie with the given name.
 * @property {Function} deleteCookie Deletes the cookie with the given name.
 */
let CookieManager = {
  /**
   * Sets a cookie with the given name, value and time till expire.
   * 
   * If no expire time is given, the default expire time is used.
   * 
   * @param {String} cookieName Name of the cookie to set.
   * @param {String} cookieValue String value of the cookie to set.
   * @param {Number} expireTimeInHours Time in hours till the cookie expires. (default: 10 days)
   */
  setCookie: function (
    cookieName,
    cookieValue,
    expireTimeInHours = config.defaultCookieExpireTime
  ) {
    // Calculate the expire time
    var d = new Date();
    d.setTime(d.getTime() + expireTimeInHours * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    // Set the cookie
    document.cookie =
      cookieName +
      "=" +
      cookieValue +
      "; " +
      expires +
      "; path=/; samesite=strict; secure"; 
      // path is set to / so that the cookie is available on all pages
      // samesite is set to strict so that the cookie is not sent with cross-site requests
      // secure is set to true so that the cookie is only sent over https
  },

  /**
   * Gets the value of the cookie with the given name.
   * 
   * If no cookie with the given name exists, null is returned.
   * 
   * @param {String} cookieName Name of the cookie to get.
   * @returns {String} Value of the cookie with the given name.
   */
  getCookie: function (cookieName) {
    var name = cookieName + "=";
    var ca = document.cookie.split(";");
    // Search for the cookie with the given name in the cookie array
    for (var c of ca) {
      // Remove leading spaces
      while (c.charAt(0) === " ") c = c.substring(1);
      // If the cookie with the given name is found, return its value
      if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    console.warn("No cookie found with name: " + cookieName);
    // If no cookie with the given name is found, return null
    return null;
  },

  /**
   * Deletes the cookie with the given name. 
   * 
   * @param {String} cookieName Name of the cookie to delete.
   */
  deleteCookie: function (cookieName) {
    // Set the expire time to a date in the past
    document.cookie =
      cookieName + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
  },
};

export default CookieManager;
