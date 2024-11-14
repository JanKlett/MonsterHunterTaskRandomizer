import React from "react";

import TreeView from "../TreeView";

import "./TreeItem.scss";
import InlineIcon from "../../../base-components/inline-icon/InlineIcon";

/**
 * Tree item component
 * @param {Object} props the props
 * @param {string} props.icon the icon
 * @param {string} props.value the value
 * @param {string} props.text the text
 * @param {Object[]} props.items the sub items
 * @param {Function} props.onItemClick the click handler
 * @param {string} props.currentItem the current value
 * @returns {JSX.Element} the tree item
 */
export default function TreeItem(props) {
  const itemClicked = (e) => {
    props.onItemClick(props);
  };

  return (
    <div
      className={
        "tree-item" +
        (props.currentItem === props.value ? " tree-item-selected" : "")
      }
      onClick={itemClicked}
    >
      <div className={"tree-item-content"}>
        <InlineIcon icon={props.icon} className={"tree-item-icon"} />
        <div className={"tree-item-text"}>{props.text}</div>
      </div>
      {props.items && props.items.length > 0 && (
        <div className={"tree-item-children"}>
          {
            <TreeView
              items={props.items}
              keyExpr={"subTree"}
              onItemClick={props.onItemClick}
              currentItem={props.currentItem}
            />
          }
        </div>
      )}
    </div>
  );
}
