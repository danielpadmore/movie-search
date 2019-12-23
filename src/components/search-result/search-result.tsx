import React from "react";
import { Movie } from "@danielpadmore/movie-client/dist/models/movie";
import classes from "./search-result.module.scss";
import Card from "../card/card";
type Props = {
  movie: Movie;
};
const SearchResult = ({ movie }: Props) => {
  const releaseYear = new Date(movie.releaseDate).getFullYear();
  return (
    <Card backgroundUrl={movie.backdropUrl}>
      <div className={classes.content}>
        <p>
          {movie.title} ({releaseYear})
        </p>
      </div>
    </Card>
  );
};

export default SearchResult;
