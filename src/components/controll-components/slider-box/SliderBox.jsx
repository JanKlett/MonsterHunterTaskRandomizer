import React, { useState, useEffect } from "react";

import InlineIcon from "../../base-components/inline-icon/InlineIcon";
import Tooltip from "../../base-components/tooltip/Tooltip";

import "./SliderBox.scss";

/**
 * slider box component
 * @param {Object} props the props
 * @param {string} props.id the id
 * @param {string} props.className the class name
 * @param {string} props.icon the icon
 * @param {string} props.title the title
 * @param {boolean} props.hasTooltip
 * @param {string} props.tooltip the tooltip
 * @param {Function} props.onValueChanged the click handler
 * @param {number} props.defaultValue the default value
 * @param {number} props.min the minimum value
 * @param {number} props.max the maximum value
 * @param {string} props.unit the unit of the value
 * @param {boolean} props.disabled the disabled state
 * @returns {JSX.Element} the slider box
 */
export default function SliderBox(props) {
  const {
    icon,
    title,
    onValueChanged,
    defaultValue,
    min,
    max,
    disabled,
    className,
    tooltip,
    tooltipDir,
    id,
    hasTooltip,
    unit
  } = props;
  const [value, setValue] = useState(defaultValue);

  const Id = (id ? id : "").replace(" ", "-");

  const trackMouse = (e) => {
    let slider = document.getElementById(Id + "-slider");
    let sliderRect = slider.getBoundingClientRect();
    let sliderLeft = sliderRect.left;
    let sliderWidth = sliderRect.width;
    let mousex = e.clientX;
    let mousePercent = Math.floor(((mousex - sliderLeft) / sliderWidth) * 100);
    if (mousePercent < 0) {
      mousePercent = 0;
    } else if (mousePercent > 100) {
      mousePercent = 100;
    }
    setValue(mousePercent);
    onValueChanged(mousePercent);
  };

  const startFollowMouse = (e) => {
    document.getElementById(Id + "-slider-wrapper").onmousemove = trackMouse;
  };

  const stopFollowMouse = (e) => {
    document.getElementById(Id + "-slider-wrapper").onmousemove = null;
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <Tooltip
      tooltipContent={tooltip}
      direction={tooltipDir}
      disabled={!hasTooltip}
      id={Id}
      className="slider-box-tooltip"
    >
      <div
        className={
          "slider-box" +
          (disabled ? " disabled " : " ") +
          (className ?? className)
        }
        id={Id}
      >
        <div className="slider-box-title">
          <InlineIcon icon={icon} className="slider-box-title-icon" />
          <span className="slider-box-title-txt">{title}</span>
        </div>
        <Tooltip
          tooltipContent={value + (unit ? unit : "")}
          direction="top"
          id={Id + "-tooltip"}
          className="slider-tooltip"
          style={{ left: `${value}%` }}
        >
          <div className="slider-wrapper" id={Id + "-slider-wrapper"}>
            <input
              type="range"
              min={min}
              max={max}
              value={value}
              className="slider-input"
              disabled={disabled}
              readOnly
            />
            <div className="slider-bar" id={Id + "-slider"}>
              <div className="slider-fill" style={{ width: `${value}%` }}></div>

              <div
                className="slider-thumb"
                style={{ left: `${value}%` }}
                onMouseDown={startFollowMouse}
                onMouseUp={stopFollowMouse}
              ></div>
            </div>
          </div>
        </Tooltip>
      </div>
    </Tooltip>
  );
}
