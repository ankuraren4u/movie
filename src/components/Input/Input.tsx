import React from "react";
import classnames from "classnames";
import "./style.scss";

export const Input: React.FC<{
  type: string;
  name: string;
  value?: string;
  baseClass?: string;
  handleChange?: Function;
  placeholder?: string;
  handleKeyPress?: Function;
}> = ({ type, name, value, baseClass, handleChange, handleKeyPress, placeholder}) => {
  const onKeyDown: (event: React.FormEvent<HTMLInputElement>) => void = e =>
    handleKeyPress ? handleKeyPress(e) : null;

  const onChange: (event: React.FormEvent<HTMLInputElement>) => void = e =>
    handleChange ? handleChange(e) : null;

  return (
    <input
      type={type}
      name={name}
      value={value}
      className={classnames("input", baseClass)}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    />
  );
};
