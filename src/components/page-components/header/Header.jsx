import React /*, {useState, useEffect}*/ from "react";

import appInfo from "../../../app-info";

import "./Header.scss";

export default function Header() {
  const { title } = appInfo;
  return (
    <header className={"header-container"}>
      <div className={"header"}>
        <div className={"header-title"}>
          <h1 className="header-title-text">{title}</h1>
        </div>
      </div>
    </header>
  );
}
