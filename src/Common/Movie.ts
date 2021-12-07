export default interface Movie {
  id: number;
  poster_path: string;
  release_date: string;
  genres: string[];
  title: string;
  overview: string;
  vote_average: number;
  vote_count: number;
}
