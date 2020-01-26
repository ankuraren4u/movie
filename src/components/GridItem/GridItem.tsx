import React from "react";
import classnames from "classnames";
import "./style.scss";
export const GridItem: React.FC<{
  imgUrl: string;
  name: string;
  year: string;
  genre: string,
  baseClass?: string
}> = ({ imgUrl, name, year, genre, baseClass }) => {
  
  return (
    <div className={classnames("grid", baseClass)}>
      <img src={imgUrl} alt={name} className= {classnames('grid__img')}/>
      <div className="grid__caption">
        <div className="grid__name ellipsis">{name}</div>
        <div className="grid__info">{genre}{genre && year ? ', ' : ''}{year}</div>
      </div>
    </div>
  );
};
