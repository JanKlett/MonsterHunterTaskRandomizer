import React from "react";

import "./TabItem.scss";

/**
 * Tab item component
 * @param {Object} props the props
 * @param {React.ReactNode} props.children the children
 * @param {boolean} props.active whether the tab is active or not
 * @param {Function} props.onClick the click handler
 * @returns {JSX.Element} the tab item
 */
export default function TabItem(props) {
  const { children, active, onClick, name } = props;

  return (
    <div
      className={`tab-item ${active ? "tab-item-active" : ""}`}
      id={name}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
