import React, { useEffect, useState } from "react";

import "./TextInput.scss";

/**
 * Text input component
 *
 * @param {Object} props the properties of the component
 * @param {string} props.label the label of the input
 * @param {string} props.value the value of the input
 * @param {string} props.placeholder the placeholder of the input
 * @param {boolean} props.disabled whether the input is disabled
 * @param {boolean} props.readOnly whether the input is read-only
 * @param {boolean} props.required whether the input is required
 * @param {string} props.type the type of the input
 * @param {string} props.name the name of the input
 * @param {string} props.className the class name of the input
 * @param {function} props.onChange the change event handler
 *
 * @returns {JSX.Element} the text input component
 */
export default function TextInput({
  label,
  value,
  placeholder,
  disabled,
  readOnly,
  required,
  type,
  name,
  className,
  onChange,
}) {
  const [inputValue, setInputValue] = useState(value);
  const handleOnChange = (event) => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event.target.value, inputValue);
    }
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <div
      className={`text-input-container input ` + (className ? className : "")}
    >
      <label className="text-input-label" htmlFor={name}>
        {label}
      </label>
      <input
        className="text-input"
        type={type}
        name={name}
        value={inputValue}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        onChange={handleOnChange}
      />
    </div>
  );
}
