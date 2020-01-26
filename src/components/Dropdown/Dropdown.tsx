import React, { ReactNodeArray } from "react";
import classnames from "classnames";
import "./style.scss";
import { IDropdownItem } from "./../../interfaces";
export const Dropdown: React.FC<{
  name: string;
  baseClass?: string;
  handleChange?: Function;
  optionList?: IDropdownItem[];
  value: string;
}> = ({ name, baseClass, handleChange, optionList, value }) => {
  const onChange: (event: React.FormEvent<HTMLSelectElement>) => void = e =>
    handleChange ? handleChange(e) : null;

  optionList = optionList || [];
  const optionElements: ReactNodeArray = optionList.map(
    (item: IDropdownItem) => {
      return <option value={item.id}>{item.name}</option>;
    }
  );
  return (
    <label className={classnames("dropdown-wrapper", baseClass)}>
      <div className="dropdown-label">{name}</div>
      <select
        className={classnames("dropdown", baseClass)}
        name={name}
        onChange={onChange}
        value={value}
      >
        <option value="">Select</option>
        {optionElements}
      </select>
    </label>
  );
};
