import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router";
import SearchRoute from "../../routes/search";
import MovieRoute from "../../routes/movie";
import { useMovieSearch } from "../../hooks/use-movie-client";
import useQueryParams from "../../hooks/use-query";
import classes from "./app.module.scss";

export const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, searchLoading, searchError] = useMovieSearch(searchTerm);
  const history = useHistory();

  const queryParams = useQueryParams();

  const query = queryParams.get("query");

  // If we have a search query parameter on mount and no searchTerm in state - then we should use the query passed via URL
  useEffect(() => {
    if (query && !searchTerm) {
      setSearchTerm(query);
    }
  }, []);

  // We'll determine a message to display to the user here.
  let statusMessage = "Type to Search";
  if (searchLoading) {
    statusMessage = "Loading...";
  } else if (searchError !== null) {
    statusMessage = searchError;
  }

  return (
    <main>
      <header className={classes.header}>
        <h1>Movie Search App</h1>
        <input
          className={classes.error}
          value={searchTerm}
          onChange={event => {
            const newTerm = event.target.value;
            setSearchTerm(newTerm);
            history.push(`/search?query=${newTerm}`);
          }}
        />
        <p>{statusMessage}</p>
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
