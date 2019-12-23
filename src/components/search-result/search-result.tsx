import React from "react";
import { Movie } from "@danielpadmore/movie-client/dist/models/movie";
import classes from "./search-result.module.scss";
import Card from "../card/card";
type Props = {
  movie: Movie;
};
const SearchResult = ({ movie }: Props) => {
  const releaseYear = new Date(movie.releaseDate).getFullYear();

  // We'll add a fallback image here for the time being which could be from a CDN or shipped with the app
  const backgroundUrl =
    movie.backdropUrl !== ""
      ? movie.backdropUrl
      : "https://www.virginmediastore.com/images/tile-placeholder-backdrop.png";
  return (
    <Card backgroundUrl={backgroundUrl}>
      <div className={classes.content}>
        <p>
          <span>{movie.title}</span>
          <span>({releaseYear})</span>
        </p>
      </div>
    </Card>
  );
};

export default SearchResult;
