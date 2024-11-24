import React, { useEffect } from "react";

import "./Tooltip.scss";

/**
 *
 * @param {Object} props
 * @param {JSX.Element} props.children Item to be tooltiped
 * @param {JSX.Element} props.tooltipContent Content of the tooltip
 * @param {string} props.direction Direction of the tooltip (top, bottom, auto)
 * @param {string} props.id Id of the tooltip
 * @param {string} props.className Class of the tooltip
 * @param {boolean} props.disabled Disables the tooltip
 * @returns
 */
export default function Tooltip(props) {
  const { children, tooltipContent, disabled, direction, id, className } =
    props;

  useEffect(() => {
    const tooltipWrapper = document.getElementById("tooltip-" + id);

    if (tooltipWrapper && !disabled) {
      setTimeout(() => {
        const tooltipWrapperHeight = tooltipWrapper.getBoundingClientRect().top;
        const tooltip = tooltipWrapper.children[1];

        if (direction === undefined || direction === "auto") {
          if (tooltipWrapperHeight > 150) {
            tooltip.classList.add("tooltip-dir-top");
          } else {
            tooltip.classList.add("tooltip-dir-bottom");
          }
        } else {
          tooltip.classList.add("tooltip-dir-" + direction);
        }
      }, 100);
    } else if (disabled) {
      return;
    } else {
      console.warn("Tooltip wrapper not found:", "tooltip-" + id, disabled);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className={"tooltip-wrapper " + (className ? className : "")}
      id={"tooltip-" + id}
    >
      <div className="tooltipped-item">{children}</div>
      {(disabled !== true) && (
        <div className={"tooltip"}>
          <div className="tooltip-content">{tooltipContent}</div>
        </div>
      )}
    </div>
  );
}
