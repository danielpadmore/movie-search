import React from "react";
import { Movie } from "@danielpadmore/movie-client/dist/models/movie";
import Card from "../card/card";
type Props = {
  movie: Movie;
};
const SearchResult = ({ movie }: Props) => (
  <Card>
    <h5>{movie.title}</h5>
  </Card>
);

export default SearchResult;
