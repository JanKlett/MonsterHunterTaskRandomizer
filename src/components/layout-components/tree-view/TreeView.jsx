import React from "react";

import "./TreeView.scss";
import TreeItem from "./tree-item/TreeItem";

/**
 * Tree view component
 * @param {Object} props the props
 * @param {Object[]} props.items the items
 * @param {string} props.items[].icon the icon item
 * @param {string} props.items[].value the value
 * @param {string} props.items[].text the text
 * @param {Object[]} props.items[].items the sub items
 * @param {Function} props.onItemClick the click handler
 * @param {string} props.currentItem the current selected value
 * @returns {JSX.Element} the tree view
 */
export default function TreeView(props) {
  return (
    <div className={"tree-view"}>
      {props.items.map((item) => {
        return (
          <TreeItem
            key={item.value}
            expanded={item.expanded}
            icon={item.icon}
            value={item.value}
            text={item.text}
            items={item.items}
            onItemClick={props.onItemClick}
            currentItem={props.currentItem}
          />
        );
      })}
    </div>
  );
}
