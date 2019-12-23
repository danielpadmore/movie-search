import React, { useEffect, useState } from "react";
import MovieDBClient from "@danielpadmore/movie-client/dist/movie-db-client";
import { Movie } from "@danielpadmore/movie-client/dist/models/movie";
import { Router } from "react-router";

const movieClient = new MovieDBClient(process.env.MOVIE_DB_ACCESS_TOKEN || "");

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
      {movies && (
        <ul>
          {movies.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default App;
