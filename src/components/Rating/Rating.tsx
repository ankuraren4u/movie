import React from "react";
import classnames from "classnames";
import "./style.scss";

export const Rating: React.FC<{
  handleClick?: Function;
}> = ({ handleClick }) => {
  const onClick: (event: React.FormEvent<HTMLDivElement>) => void = e =>
    handleClick ? handleClick(e) : null;

  return <div className={classnames("rating")} onClick={onClick}></div>;
};
