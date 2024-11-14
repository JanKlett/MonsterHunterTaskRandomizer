import React from "react";

import "./SingleCard.scss";

/**
 * Single card layout
 *
 * @param {object} props the properties for the single card layout
 * @param {string} props.className the class name for the single card layout
 * @param {string} proos.title the title of the single card layout (optional)
 * @param {JSX.Element} props.children the children of the single card layout
 * @returns {JSX.Element} the single card layout
 */
export default function SingleCard(props) {
  const { title, className } = props;

  return (
    <div className={"single-card " + (className && className)}>
      {title && <h2 className="single-card-title">{title}</h2>}
      {props.children}
    </div>
  );
}
