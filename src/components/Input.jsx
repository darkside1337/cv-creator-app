import React from "react";

const Input = ({
  type = "text",
  label,
  recommended = false,
  value = "",
  placeholder,
  id,
  onChange,
}) => {
  return (
    <div className="input__container">
      <label htmlFor={id}>
        <span className="label-text">{label}</span>
        {recommended && <span className="recommended-text">recommended</span>}
      </label>
      <input
        className="input"
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
