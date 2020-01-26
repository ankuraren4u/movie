import React, { useEffect } from "react";
import "./styles.scss";
import { Sidebar } from "../Sidebar";
import { ShowMovieList } from "./../ShowMovieList";
import { useMovieHook } from "./../../hooks";
import { useParams } from "react-router-dom";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { Header } from "../Header";

export const Content: React.FC = () => {
  const { updateGenres, genres, updateCategory } = useMovieHook();
  let { category } = useParams();
  useEffect(() => {
    (async () => {
      if (!genres) {
        await updateGenres();
      }
      updateCategory(category || "Popular");
    })();
  }, [category]);
  return (
    <>
      <ShowMovieList />
      {genres ? <Sidebar /> : null}
    </>
  );
};

export const Container: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Redirect exact from="/" to="/popular" />
          <Route exact path="/:category" component={Content} />
        </Switch>
      </div>
    </Router>
  );
};
