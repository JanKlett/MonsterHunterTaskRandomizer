import React, { useMemo } from "react";

import "./MouseFollower.scss";


/**
 * A component that follows the mouse
 * 
 * @param {Object} props 
 * @param {boolean} props.disabled
 * @param {JSX.Element} props.children
 * @param {boolean} props.cancelEvent
 * @param {Function} props.onCancel
 * @returns {JSX.Element} A component that follows the mouse
 */
export default function MouseFollower(props) {
  const { disabled, children, cancelEvent, onCancel } = props;

  useMemo(() => {
    document.addEventListener("mousemove", (event) => {
      if (disabled) {
        return;
      }
      const element = document.getElementById("mouse-follower");
      if (element === null) {
        return;
      }
      element.style.left = `${event.clientX}px`;
      element.style.top = `${event.clientY}px`;
    });
    document.addEventListener(cancelEvent ? cancelEvent : "contextmenu", (event) => {
      if (disabled) {
        return;
      }
      event.preventDefault();
      if (onCancel) {
        onCancel();
      }

    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div id="mouse-follower" className="mouse-follower">
      {!disabled && <div className="mouse-follower-content">{children}</div>}
    </div>
  );
}
