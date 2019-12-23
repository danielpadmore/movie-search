import React from "react";
import { Movie } from "@danielpadmore/movie-client/dist/models/movie";
import SearchResult from "../components/search-result/search-result";
import Grid from "../components/grid/grid";

type Props = {
  movies: Movie[];
};
export const SearchRoute = ({ movies }: Props) => {
  return (
    <div>
      <h3>{movies.length} Results</h3>
      <Grid>
        {movies.map(movie => (
          <SearchResult key={movie.id} movie={movie} />
        ))}
      </Grid>
    </div>
  );
};

export default SearchRoute;
