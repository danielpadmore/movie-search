import MovieDBClient from "@danielpadmore/movie-client/dist/movie-db-client";
import { useState, useEffect } from "react";
import useDebounce from "./use-debounce";
import { Movie } from "@danielpadmore/movie-client/dist/models/movie";

// All hooks for the movie client

// Create Movie Client - we can choose any implementation
const client = new MovieDBClient(process.env.MOVIE_DB_ACCESS_TOKEN || "");

// Create a debounced function for querys to searching movies
export function useMovieSearch(query: string) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const debouncedQuery = useDebounce(query, 200);

  useEffect(() => {
    (async () => {
      if (debouncedQuery === "") {
        return;
      }
      setLoading(true);
      try {
        const results = await client.searchAllMovies(debouncedQuery);
        setMovies(results);
      } catch (err) {
        if (err.message && typeof err.message === "string") {
          setError(err.message);
        }
      }
      setLoading(false);
    })();
  }, [debouncedQuery]);

  return [movies, loading, error] as [Movie[], boolean, string | null];
}
