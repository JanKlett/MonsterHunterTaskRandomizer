import React from "react";
import { faSquareCheck} from "@fortawesome/free-solid-svg-icons";
import InlineIcon from "../../base-components/inline-icon/InlineIcon";

import "./CheckBox.scss";

/**
 * Checkbox component
 * @param {Object} props the props
 * @param {string} props.className the class name
 * @param {string} props.label the title
 * @param {boolean} props.checked the checked state
 * @param {Function} props.onChange the change handler
 * @param {string} props.dir the direction of the checkbox (ltr, rtl) default is ltr
 * @returns {JSX.Element} the checkbox
 */
export default function CheckBox(props) {
  const { label, checked, onChange, className, dir } = props;

  const onCheck = () => {
    onChange(!checked);
  };

  return (
    <div className={"check-box-wrapper " + (className && className)}>
      {dir === "rtl" ? (
        <>
          <div className={"check-box "} onClick={onCheck}>
            {checked && (
              <div className="check-box-checkmark">
                <InlineIcon
                  icon={faSquareCheck}
                  className="checkbox-check"
                />
              </div>
            )}
          </div>
          <label className="check-box-label">{label}</label>
        </>
      ) : (
        <>
          <label className="check-box-label">{label}</label>
          <div className={"check-box "} onClick={onCheck}>
            {checked && (
              <div className="check-box-checkmark">
                <InlineIcon
                  icon="fa-solid fa-check"
                  className="checkbox-check"
                />
              </div>
            )}
          </div>
        </>
      )}
      <input
        type="checkbox"
        checked={checked}
        onChange={onCheck}
        className="check-box-input"
      />
    </div>
  );
}
