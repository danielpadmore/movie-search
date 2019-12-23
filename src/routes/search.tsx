import React from "react";
import useQueryParams from "../hooks/use-query";

export const SearchRoute = () => {
  const queryParams = useQueryParams();

  const query = queryParams.get("query");

  return <div>Search Results: {query}</div>;
};

export default SearchRoute;
