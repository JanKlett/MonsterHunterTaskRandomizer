import React, { useMemo, useEffect } from "react";
import {
  getLocalizedString,
  adjustLineLengthForLanguage,
} from "../../../localization/localization";

import "./TextBlock.scss";

/**
 * Text block component
 *
 * @param {object} props the properties for the text block component
 * @param {string} props.className the class name for the text block component
 * @param {string} props.title the title of the text block component (optional)
 * @param {string} props.text the text of the text block component
 * @param {Array<String>} props.localizationKeys the localization keys for the text block component prioritzed over text
 * @param {Number} props.maxLineLength the maximum width of the text block component
 * @param {boolean} props.hasDivider the flag to show a divider (optional)
 * @returns {JSX.Element} the text block component
 */
export default function TextBlock(props) {
  const {
    title,
    text,
    localizationKeys,
    maxLineLength,
    className,
    hasDivider,
  } = props;
  const languageMaxLineLength = adjustLineLengthForLanguage(maxLineLength);
  const content = localizationKeys
    ? getLocalizedString(localizationKeys)
    : text;
  const contentArray = [content];

  const adjustTextToLineLength = () => {
    if (!content) {
      console.error("TextBlock: No content provided");
    } else if (content.length > languageMaxLineLength) {
      contentArray.length = 0;
      let prevSpaceIndex = 0;
      for (let i = 0; i < content.length / languageMaxLineLength; i++) {
        // Try finding a space 10% before the end of the max linelength
        let spaceIndex = content.indexOf(
          " ",
          (i + 1) * languageMaxLineLength -
            Math.floor(languageMaxLineLength / 10)
        );
        // If no space found, assume the end of the content
        if (spaceIndex === -1) {
          spaceIndex = content.length;
        }
        // If the space is too far from the previous space, force a split
        if (
          spaceIndex - prevSpaceIndex >
          languageMaxLineLength
        ) {
          spaceIndex = prevSpaceIndex + languageMaxLineLength;
        }
        contentArray.push(content.substring(prevSpaceIndex, spaceIndex));
        prevSpaceIndex = spaceIndex;
      }
    }
  };
  
  if (content) {
    adjustTextToLineLength();
  }

  return (
    <div className={"text-block " + (className ? className : "")} style={{width:`calc(${languageMaxLineLength}*1em/2.2)`}}>
      {title && <h2 className="text-block-title">{title}</h2>}
      {hasDivider && <div className="text-block-divider divider" />}
      <div className="text-block-content">
        {contentArray.map((line, index) => (
          <p key={index} className="text-block-line">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
