import React from "react";
import { render } from "@testing-library/react";
import SearchResult from "../src/components/search-result/search-result";
import buildMovie from "./utils/build-movie";

describe("search-result", () => {
  it("should render the movie title", () => {
    const movie = buildMovie();
    const { getByText } = render(<SearchResult movie={movie} />);
    expect(getByText(movie.title).innerHTML).toBe(movie.title);
  });
  it("should render the movie's year in brackets", () => {
    const movie = buildMovie();
    const { getByText } = render(<SearchResult movie={movie} />);
    const year = new Date(movie.releaseDate).getFullYear().toString();
    const expectedText = "(" + year + ")";
    expect(getByText(expectedText).innerHTML).toBe(expectedText);
  });
  it("should render the movie's backdrop if available", () => {
    const movie = buildMovie();
    const { container } = render(<SearchResult movie={movie} />);
    const cardElem = container.getElementsByClassName(
      "container"
    )[0] as HTMLDivElement;
    expect(cardElem.style.backgroundImage).toBe(
      "url(" + movie.backdropUrl + ")"
    );
  });
  it("shouldn't render the movie's backdrop if not available", () => {
    const movie = buildMovie();
    movie.backdropUrl = "";
    const { container } = render(<SearchResult movie={movie} />);
    const cardElem = container.getElementsByClassName(
      "container"
    )[0] as HTMLDivElement;
    expect(cardElem.style.backgroundImage).not.toBe(
      "url(" + movie.backdropUrl + ")"
    );
  });
});
