import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import SearchRoute from "../../routes/search";
import MovieRoute from "../../routes/movie";
import { useMovieSearch } from "../../hooks/use-movie-client";
import useQueryParams from "../../hooks/use-query";
import classes from "./app.module.scss";

export const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, searchLoading, searchError] = useMovieSearch(searchTerm);

  const queryParams = useQueryParams();

  const query = queryParams.get("query");

  // If we have a search query parameter on mount and no searchTerm in state - then we should use the query passed via URL
  useEffect(() => {
    if (query && !searchTerm) {
      setSearchTerm(query);
    }
  }, []);

  return (
    <main>
      <header className={classes.header}>
        <h1>Movie Search App</h1>
        <input
          value={searchTerm}
          onChange={event => {
            setSearchTerm(event.target.value);
          }}
        />
      </header>
      <Switch>
        <Route
          path="/search"
          component={() => <SearchRoute movies={movies} />}
        />
        <Route path="/movie" component={() => <MovieRoute />} />
      </Switch>
    </main>
  );
};

export default App;
