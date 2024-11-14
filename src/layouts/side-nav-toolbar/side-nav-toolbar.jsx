import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router";

import SideNavigationMenu from "../../components/page-components/side-navigation-menu/SideNavigationMenu";
import Header from "../../components/page-components/header/Header";
import Footer from "../../components/page-components/footer/Footer";
import CookieManager from "../../utils/cookie-manager";
import RunningAlgorithmManager from "../../utils/running-algorithm-manager";

import "./side-nav-toolbar.scss";

/**
 * Side nav toolbar
 * @param {Object} props the props
 * @param {React.ReactNode} props.children the children
 * @returns {JSX.Element} the side nav toolbar
 */
export default function SideNavToolbar({ children }) {
  const navigate = useNavigate();
  const [menuStatus, setMenu] = useState(
    CookieManager.getCookie("sidebar") === "true"
  );
  const [transition, setTransition] = useState(false);
  const toggleMenu = useCallback(() => {
    CookieManager.setCookie("sidebar", !menuStatus);
    setMenu(!menuStatus);
    setTransition(true);
  }, [menuStatus]);
  const closeMenu = () => {
    CookieManager.setCookie("sidebar", false);
    setMenu(false);
    setTransition(true);
  };

  const onNavigate = (data) => {
    navigate(data.value);
    RunningAlgorithmManager.stopCurrentAlgorithm();
  };

  return (
    <div className={"side-nav-inner-toolbar"}>
      <SideNavigationMenu
        selectedItemChanged={onNavigate}
        toggleMenu={toggleMenu}
        menuStatus={menuStatus}
        transition={transition}
      />
      <div className={"content-block"} onClick={closeMenu}>
        {React.Children.map(children, (item) => {
          return item.type === Header && item;
        })}
        <div className={"content"} id="main-content">
          {React.Children.map(children, (item) => {
            return item.type !== Footer && item.type !== Header && item;
          })}
        </div>
        {React.Children.map(children, (item) => {
          return item.type === Footer && item;
        })}
      </div>
    </div>
  );
}
