import React, { ReactNode } from "react";
import { IMenuItem } from "../../interfaces";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import "./style.scss";

export const Menu: React.FC<{
  menuItems: IMenuItem[];
  baseClass?: string;
  //   activeItem: string;
}> = ({ menuItems, baseClass }) => {
  const menuList: ReactNode[] = menuItems.map((item: IMenuItem) => {
    return (
      <NavLink key={item.name}
        to={item.url}
        activeClassName="menu-item--active"
        className={classnames({ "menu-item": true })}
      >
        {item.name}
      </NavLink>
    );
  });
  return (
    <nav className={classnames(baseClass, { menu: true })}>{menuList}</nav>
  );
};
