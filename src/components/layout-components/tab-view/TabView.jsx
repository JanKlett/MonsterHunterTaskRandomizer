import React, { useState } from "react";

import TabItem from "./tab-item/TabItem";
import CookieManager from "../../../utils/cookie-manager";

import "./TabView.scss";

/**
 * TabView component
 * @param {Object} props the props
 * @param {string} props.name the tab name
 * @param {Object[]} props.tabs the tabs
 * @param {string} props.tabs[].name the tab name
 * @param {React.ReactNode} props.tabs[].content the tab content
 * @param {Function} props.onChangedTab the tab changed handler
 * @returns {JSX.Element} the tab view
 */
export default function TabView(props) {
  const { tabs, name, onChangedTab } = props;
  const [activeTab, setActiveTab] = useState(
    parseInt(CookieManager.getCookie("active"+name)) || 0
  );

  const handleTabClick = (index) => {
    setActiveTab(index);
    CookieManager.setCookie("active"+name, index);
    if (onChangedTab) onChangedTab(tabs[index]);
  };

  return (
    <div className="tab-view" id={name}>
      <div className="tab-view-header">
        {tabs.map((tab, index) => (
          <TabItem
            key={index}
            name={tab.name}
            active={activeTab === index}
            onClick={() => handleTabClick(index)}
          >
            {tab.name}
          </TabItem>
        ))}
      </div>
      <div className="tab-view-content" id={tabs[activeTab].name + "Content"}>{tabs[activeTab].content}</div>
    </div>
  );
}
