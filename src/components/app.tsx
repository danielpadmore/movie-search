import React, { useState } from "react";
import { Router, Route, Switch } from "react-router";
import SearchRoute from "../routes/search";
import MovieRoute from "../routes/movie";
import { createBrowserHistory } from "history";

import { useMovieSearch } from "../hooks/use-movie-client";

const history = createBrowserHistory();

export const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, searchLoading, searchError] = useMovieSearch(searchTerm);

  return (
    <main>
      <h1>Movie Search</h1>
      <input
        value={searchTerm}
        onChange={event => {
          setSearchTerm(event.target.value);
        }}
      />
      <Router history={history}>
        <Switch>
          <Route path="/search" component={SearchRoute} />
          <Route path="/movie" component={MovieRoute} />
        </Switch>
      </Router>
    </main>
  );
};

export default App;
