import React, { useCallback, useMemo, useState } from "react";

import Drawer from "../../layout-components/drawer/Drawer";
import TreeView from "../../layout-components/tree-view/TreeView";
import { navigation } from "../../../app-navigation";
import { useNavigation } from "../../../contexts/navigation";
import { useScreenSize } from "../../../utils/media-query";
import appInfo from "../../../app-info";

import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";
import CookieManager from "../../../utils/cookie-manager";

import "./SideNavigationMenu.scss";

/**
 * Side navigation menu
 * @param {Object} props the props
 * @param {Function} props.selectedItemChanged the selected item changed handler
 * @param {Function} props.toggleMenu the toggle menu handler
 * @param {boolean} props.menuStatus the menu status
 * @param {boolean} props.transition the transition
 * @returns {JSX.Element} the side navigation menu
 */
export default function SideNavigationMenu(props) {
  const { selectedItemChanged, menuStatus, toggleMenu, transition } = props;

  const { isLarge } = useScreenSize();
  function normalizePath() {
    return navigation.map((item) => ({
      ...item,
      expanded: isLarge,
      value: item.path && !/^\//.test(item.path) ? `/${item.path}` : item.path,
    }));
  }

  const items = useMemo(
    normalizePath,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const {
    navigationData: { currentPath },
  } = useNavigation();

  return (
    <Drawer
      direction={"horizontal"}
      transition={transition}
      opened={menuStatus}
      mode={"overlay"}
    >
      <div className="side-naviagation-menu-header" onClick={toggleMenu}>
        <div className="side-naviagation-menu-header-title">
          <i className="fa-solid fa-bars"></i>
          <h1 className="side-naviagation-menu-header-title-text">
            {appInfo.title}
          </h1>
        </div>
      </div>
      <div
        className={"dx-swatch-additional side-navigation-menu"}
        style={{ position: "relative" }}
      >
        <div className={"menu-container"}>
          <TreeView
            items={items}
            keyExpr={"path"}
            onItemClick={selectedItemChanged}
            currentItem={currentPath}
          />
        </div>

        <div
          className="menu-container"
          style={{
            position: "absolute",
            bottom: "50px",
            width: "100%",
            minHeight: "min-content",
            borderTop: "3px double #515159",
          }}
        >
          <ThemeSwitcher />
        </div>
      </div>
    </Drawer>
  );
}
