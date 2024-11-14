import React from "react";
import InlineIcon from "../../base-components/inline-icon/InlineIcon";

import "./NumberBox.scss";

/**
 *
 * @param {Object} props
 * @param {String} props.className
 * @param {String} props.label
 * @param {String} props.icon
 * @param {Number} props.maxValue
 * @param {Number} props.minValue
 * @param {Number} props.value
 * @param {Function} props.onChange
 * @returns {JSX.Element}
 */
export default function NumberBox(props) {
  const { className, label, icon, maxValue, minValue, value, onChange } = props;

  return (
    <div className={"number-box-wrapper " + (className ?? className)}>
      <label className="number-box-label">
        <InlineIcon icon={icon} className="number-box-icon" />
        <p className="number-box-label-text">{label}</p>
      </label>
      <div className="number-box">
        <input
          className="number-box-input"
          type="number"
          min={minValue}
          max={maxValue}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
