import React, { useEffect } from "react";
import useQueryParams from "../hooks/use-query";
import { Movie } from "@danielpadmore/movie-client/dist/models/movie";
import Card from "../components/card/card";
import SearchResult from "../components/search-result/search-result";

type Props = {
  movies: Movie[];
};
export const SearchRoute = ({ movies }: Props) => {
  return (
    <div>
      <h3>{movies.length} Results</h3>
      <div id="results-grid">
        {movies.map(movie => (
          <SearchResult movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchRoute;
