import React, { useState, useEffect } from "react";

import "./Drawer.scss";
import InlineIcon from "../../base-components/inline-icon/InlineIcon";

const drawerStyles = {
  expand: "drawer-expand",
  overlay: "drawer-overlay",
};

/**
 * Side drawer component
 *
 * @param {Object} props the props
 * @param {boolean} props.opened whether the drawer is opened or not
 * @param {boolean} props.transition whether the drawer should transition or not
 * @param {string} props.direction the direction of the drawer (vertical, horizontal)
 * @param {string} props.mode the mode of the drawer (expand, overlay)
 * @param {string} props.className the class name of the drawer
 * @param {Object} props.openIcon
 * @param {Object} props.closeIcon
 * @param {boolean} props.hasButtonLine
 * @param {Function} props.onCLick the function to call when the drawer is clicked
 * @param {React.ReactNode} props.children the children
 * @returns {React.ReactNode} the drawer
 */
export default function Drawer(props) {
  const {
    opened,
    direction,
    transition,
    mode,
    className,
    openIcon,
    closeIcon,
    onClick,
    hasButtonLine,
  } = props;
  const drawerClass = direction ? `drawer-${direction}` : "";
  const [animationClass, setAnimationClass] = useState(drawerClass);
  const drawerStyle = drawerStyles[mode];

  useEffect(() => {
    if (!transition) {
      setAnimationClass(drawerClass + (opened ? "" : "-closed"));
      return;
    }

    if (opened) {
      setAnimationClass(drawerClass + "-expand");
    } else {
      setAnimationClass(drawerClass + "-shrink");
    }
  }, [opened]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className={`drawer drawer-${direction} ${animationClass} ${drawerStyle} ${
        className ? className : ""
      }`}
    >
      <div className="drawer-button" onClick={onClick}>
        <InlineIcon
          icon={opened ? closeIcon : openIcon}
          className="drawer-icon"
        />
        {hasButtonLine && <div className="drawer-button-line"></div>}
      </div>
      <div className={"drawer-content "}>
        {React.Children.map(props.children, (child) => {
          return child;
        })}
      </div>
    </div>
  );
}
