import React, { useState, useEffect } from "react";

import "./Drawer.scss";

const drawerStyles = {
  "expand": "drawer-expand",
  "overlay": "drawer-overlay",
}

/**
 * Side drawer component
 *
 * @param {Object} props the props
 * @param {boolean} props.opened whether the drawer is opened or not
 * @param {boolean} props.transition whether the drawer should transition or not
 * @param {string} props.direction the direction of the drawer
 * @param {string} props.mode the mode of the drawer#
 * @param {React.ReactNode} props.children the children
 * @returns {React.ReactNode} the drawer
 */
export default function Drawer(props) {
  const { opened, direction, transition, mode } = props;
  const drawerClass = direction ? `drawer-${direction}` : "";
  const animationDuration = 300;
  const [animationClass, setAnimationClass] = useState(drawerClass);
  const drawerStyle = drawerStyles[mode];

  useEffect(() => {
    if (!transition) {
      setAnimationClass(drawerClass + (opened ? "" : "-closed"));
       return
    }

    if (opened) {
      setAnimationClass(drawerClass + "-expand");
    } else {
      setAnimationClass(drawerClass + "-shrink");
    }

  }, [opened]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={"drawer " + animationClass + " " + drawerStyle}>
      <div className={"drawer-content "}>
        {React.Children.map(props.children, (child) => {
          return child;
        })}
      </div>
    </div>
  );
}
