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
  const { movies, loading, total, searchInput, searchBy, sortBy } = useSelector(
    (state: RootState) => state.movies
  );

  const dispatch = useDispatch();

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

  //const [moviesLimit, setMoviesLimit] = useState(20);
  const showMoreMovies = () => {
    dispatch(fetchMovies(sortBy, searchInput, searchBy, movies.length));
  };
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
      {movies.length === 0 ? (
        <div>No films found.</div>
      ) : (
        <div className={styles.resultscontainer}>
          <div className={styles.movieContainer}>
            {movies.map((movie, index) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          {movies.length < total ? (
            <button className={styles.button} onClick={showMoreMovies}>
              Show more
            </button>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default MovieResult;
