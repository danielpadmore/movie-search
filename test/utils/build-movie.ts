import { Movie } from "@danielpadmore/movie-client/dist/models/movie";

export default function buildMovie(idx: number = 1): Movie {
  return {
    id: idx,
    posterUrl: `poster-${idx}.png`,
    backdropUrl: `backdrop-${idx}.png`,
    popularity: idx,
    voteCount: idx,
    adult: false,
    title: `Movie title ${idx}`,
    originalTitle: `Original title ${idx}`,
    genreIds: [idx],
    voteAverage: idx,
    overview: `Describe ${idx} Describe ${idx} Describe ${idx} Describe ${idx} Describe ${idx} Describe ${idx} Describe ${idx} Describe ${idx} Describe ${idx} Describe ${idx} Describe ${idx} Describe ${idx} Describe ${idx} Describe ${idx} Describe ${idx} `,
    releaseDate: `2010-10-${idx}`
  };
}
