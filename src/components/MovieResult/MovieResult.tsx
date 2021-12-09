import React from "react";
import styles from "./MovieResult.module.css";
import MovieCard from "../MovieCard";
import Loader from "components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "store/actions/moviesAction";
import { RootState } from "../../store/store";
import NoMoviesFound from "./NoMoviesFound";

const MovieResult: React.FC = () => {
  const { movies, loading, total, searchInput, searchBy, sortBy } = useSelector(
    (state: RootState) => state.movies
  );

  const dispatch = useDispatch();

  const showMoreMovies = () => {
    dispatch(fetchMovies(sortBy, searchInput, searchBy, movies.length));
  };

  return (
    <div>
      <div className={styles.movieResult}>
        {movies.length === 0 ? (
          <NoMoviesFound />
        ) : (
          <div className={styles.resultscontainer}>
            <div className={styles.movieContainer}>
              {movies.map((movie, index) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
            {loading ? <Loader /> : <></>}
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
    </div>
  );
};

export default MovieResult;
