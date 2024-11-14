import React from "react";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import ButtonBox from "../../controll-components/button-box/ButtonBox";

import "./PopUp.scss";

/**
 * Display a PopUp with a title and a close button.
 * 
 * @param {Object} props 
 * @param {string} props.title 
 * @param {boolean} props.isVisible
 * @param {Function} props.onClose
 * @param {boolean} props.showCloseButton
 * @param {Object} props.children
 * @returns 
 */
export default function PopUp(props) {
  const { children, title, onClose, isVisible, showCloseButton, className } = props;
  
  return (
    <div className={"pop-up" + (isVisible ? "" : " pop-up-hidden") + (className ? " " + className: "")}>
      <div className="pop-up-background" onClick={onClose}></div>
      <div className="pop-up-front">
        <div className="pop-up-header">
          <h2 className="pop-up-title">{title}</h2>
          {showCloseButton && <ButtonBox onClick={onClose} icon={faXmark} title="" className="popup-close-button"/>}
        </div>
        <div className="pop-up-content">{children}</div>
      </div>
    </div>
  );
}
