import React from "react";

import InlineIcon from "../../base-components/inline-icon/InlineIcon";

import "./SelectionBox.scss";

/**
 * Selection box component
 * @param {Object} props the props
 * @param {string} props.icon the icon
 * @param {string} props.title the title
 * @param {Object[]} props.options the options
 * @param {string} props.options[].key the option name
 * @param {string} props.options[].value the option value
 * @param {string} props.options[].icon the optional option icon
 * @param {string} props.defaultValue the default value
 * @param {string} props.className the class name
 * @param {Function} props.onChange the change handler
 * @returns {JSX.Element} the selection box
 */
export default function SelectionBox(props) {
  return (
    <div className={"selection-box " + (props.className ? props.className : "")}>
      <div className="selection-box-title">
        <InlineIcon icon={props.icon} className={"selection-box-title-icon"} />
        {props.title}
      </div>
      <div className="selection-box-selection">
        <select
          className={"select"}
          value={props.defaultValue}
          onChange={props.onChange}
        >
          {props.options.map((item, index) => {
            return (
              <option key={index} value={item.key}>
                {item.value}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
