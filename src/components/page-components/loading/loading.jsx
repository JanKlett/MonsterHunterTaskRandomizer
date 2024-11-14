import React from "react";

/**
 * A simple placeholder component to show the user that the page is loading
 * 
 * @returns {JSX.Element} Loading component
 */
export default function Loading( ) {
  return (
    <React.Fragment>
      <div className={"content-block"}>
        <div className={"content-card responsive-paddings"}>
          <div
            className="content-block"
            style={{ display: "flex", height: "69vh", width: "90%" }}
          >
            <h2
              className="loading"
              style={{
                margin: "auto",
                textAlign: "center",
                justifySelf: "center",
                alignSelf: "center",
              }}
            >
              Loading...
            </h2>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
