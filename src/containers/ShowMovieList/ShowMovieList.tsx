import React, { ReactNode } from "react";
import { GridItem } from "../../components/GridItem";
import { IMovieItem } from "../../interfaces";
import { useMovieHook } from "../../hooks";

import "./styles.scss";

export const ShowMovieList: React.FC = () => {
  let { isFetching, results, filter, query, genreHash} = useMovieHook();

  let filteredResults = results ? results.filter((item: IMovieItem) => {
    if (query && item.name.indexOf(query) === -1) {
      return false;
    }

    if (filter && filter.type && item.type !== filter.type) {
      return false;
    }
    
    filter && console.log(filter, item.genreIds);

    if(filter && filter.genre && item.genreIds.indexOf(filter.genre) === -1) {
      return false;
    }

    if(filter && filter.from && item.year < filter.from) {
      return false;
    }
    if(filter && filter.to && item.year > filter.to) {
      return false;
    }

    if(filter && filter.rating && item.rating < (filter.rating * 2)) {
      return false;
    }
    
    return true;
  }): [];
  const gridArray: ReactNode[] = filteredResults.map((item: IMovieItem) => {
    let {id, ...rest} = item;
    let genreId: string = item.genreIds[0];
    let genre = genreHash[genreId] ? genreHash[genreId] : null;
    return <GridItem key={id} {...rest} genre={genre} />
  });

  return <div className="list-container">{isFetching ? <div>Loading</div> :gridArray}</div>;
};
