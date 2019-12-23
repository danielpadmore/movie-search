import React from "react";
import useQueryParams from "../hooks/use-query";

export const MovieRoute = () => {
  const queryParams = useQueryParams();

  const movieIdString = queryParams.get("id");
  const movieId = movieIdString ? parseInt(movieIdString) : null;

  return <div>Movie id: {movieId}</div>;
};

export default MovieRoute;
