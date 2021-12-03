export default interface MovieItem {
  id: number;
  poster_path: string;
  release_date: string;
  genres: string[];
  title: string;
  vote_average?: number;
  vote_count?: number;
}
