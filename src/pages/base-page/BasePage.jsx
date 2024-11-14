import React from "react";

import "./BasePage.scss";

/**
 * Base page component
 * @param {Object} props the props
 * @param {string} props.title the title
 * @returns {JSX.Element} the base page
 */
export default function BasePage(props) {
  return (
    <React.Fragment>
      <h2 className={"content-block page-header"}>{props.title}</h2>
      <div className={"content-block page-content"}>
        <div className={"dx-card responsive-paddings"}>{props.children}</div>
      </div>
    </React.Fragment>
  );
}
