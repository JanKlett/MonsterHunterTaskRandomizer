import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getIcon from "../../../assets/icons/icons";

import "./InlineIcon.scss";

/**
 * Inline icon component
 *
 * @param {Object} props the props
 * @param {string} props.icon the icon
 * @param {string} props.className the class name
 * @returns {React.ReactNode} the icon
 */
export default function InlineIcon({icon, className}) {
  if (icon == null) {
    return null;
  } else if ( icon instanceof Object) {
    return (
      <div className={"icon-wrapper " + className}>
        {/* <i className={"icon " + icon}></i> */}
        <FontAwesomeIcon icon={icon} className="icon"/>
      </div>
    );
  } else if (icon.charAt(0) === ".") {
    return (
      <div className={"icon-wrapper " + className}>
        <img className="icon" src={getIcon(icon.substring(1))}/>
      </div>
    );
  } 
}
