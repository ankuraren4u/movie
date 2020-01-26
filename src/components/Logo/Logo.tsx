import React from "react";
import classnames from "classnames";
import "./style.scss";

export const Logo: React.FC<{ baseClass?: string }> = ({baseClass})=> {
  return <h1 className={classnames("logo", baseClass)}>Discover</h1>;
};
