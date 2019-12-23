import React, { useEffect, useState } from "react";
import MovieDBClient from "@danielpadmore/movie-client/dist/movie-db-client";
import { Movie } from "@danielpadmore/movie-client/dist/models/movie";
import { Router, Route, Switch } from "react-router";
import SearchRoute from "../routes/search";
import MovieRoute from "../routes/movie";
import { createBrowserHistory } from "history";

const movieClient = new MovieDBClient(process.env.MOVIE_DB_ACCESS_TOKEN || "");
const history = createBrowserHistory();

export const App = () => {
  const [movies, setMovies] = useState<null | Movie[]>(null);

  useEffect(() => {
    (async () => {
      const results = await movieClient.searchAllMovies("iron man");
      setMovies(results);
    })();
  }, []);
  return (
    <main>
      <h1>Movie Search</h1>
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
