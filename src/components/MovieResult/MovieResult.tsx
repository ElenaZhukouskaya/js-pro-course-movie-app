import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "store/actions/moviesAction";
//import { fetchMovies } from "store/actions/moviesAction";
//import {
//  fetchMovies,
//  setMoviesLimit,
//  SearchMovies,
//} from "../../store/actions/moviesAction";
import { RootState } from "../../store/store";
import MovieCard from "../MovieCard";
//import { SearchActionType } from "../../store/types";
//import Search from "../Search";
import TopBar from "../TopBar";
import styles from "./MovieResult.module.css";

const MovieResult: React.FC = () => {
  const { movies, loading } = useSelector((state: RootState) => state.movies);

  /*
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies("title", "asc", "", "title", "", 0, 20));
  }, [dispatch]);
  */

  /*const SearchedMovies = movies.filter((movie) => {
    if (SearchBy === "title") {
      return movie.title.toLowerCase().includes(SearchBy.toLowerCase());
    } else {
      return movie.genres[movie.id]
        .toLowerCase()
        .includes(SearchBy.toLowerCase());
    }
  });*/

  // const filteredMovies = dispatch(SearchMovies(movies, filter));

  const [moviesLimit, setMoviesLimit] = useState(20);
  const setNewMovies = useCallback(() => {
    setMoviesLimit(moviesLimit + 5);
  }, [moviesLimit, setMoviesLimit]);
  //попробовать заменить на следующий код:
  /*useEffect(() => {
    dispatch(fetchMovies(limit));
  }, [dispatch, limit]);

  const setNewMovies = useCallback(() => {
    dispatchEvent(setMoviesLimit(limit + 5));
  }, [dispatch, limit]);*/

  return (
    <div>
      <TopBar />
      <div className={styles.resultscontainer}>
        <div className={styles.movieContainer}>
          {movies.map((movie, index) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <button className={styles.button} onClick={setNewMovies}>
          Show more
        </button>
      </div>
    </div>
  );
};

export default MovieResult;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
