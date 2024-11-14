import React from "react";

import InlineIcon from "../../base-components/inline-icon/InlineIcon";

import "./ButtonBox.scss";

/**
 * button box component
 * @param {Object} props the props
 * @param {string} props.className the class name
 * @param {string} props.icon the icon
 * @param {string} props.title the title
 * @param {string} props.tooltip the tooltip
 * @param {Function} props.onClick the click handler
 * @param {boolean} props.disabled the disabled state
 * @returns {JSX.Element} the button box
 */
export default function ButtonBox(props) {
  const { icon, title, onClick, disabled, className } = props;

  const buttonPressed = (e) => {
    e.preventDefault();
    if (!disabled) {
      onClick(e);
    }
  };

  return (
    <div
      className={
        "button-box" +
        (disabled ? " disabled " : " ") +
        (className ?? className)
      }
      title={props.tooltip}
      onClick={buttonPressed}
    >
      <button
        className="button-box-button"
        disabled={disabled}
      >
        <div className="button-box-title">
          <InlineIcon icon={icon} className={"button-box-title-icon"} />
          <span>{title}</span>
        </div>
      </button>
    </div>
  );
}
