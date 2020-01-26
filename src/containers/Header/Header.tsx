import React from 'react';
import { Logo } from "./../../components/Logo"
import { Menu } from "./../../components/Menu"
import { MenuItems } from "./../../constants"
import { Input } from '../../components/Input';
import "./styles.scss";
import { useMovieHook } from '../../hooks';

export const Header: React.FC = () => {
  let { query, updateQuery } = useMovieHook();
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    let value: string = e.currentTarget.value;
    updateQuery(value);
  }
  return (
      <header className="header">
        <Logo  baseClass="pull-left" />
        <Menu menuItems={MenuItems} />
        <Input type="text" name="search" baseClass="pull-right search-bar" value={query} handleChange={handleChange} placeholder="Search" />
      </header>
  );
}