import Movie from "./Movie";

export default interface MoviesPayload {
  movies: Movie[];
  total: number;
}
