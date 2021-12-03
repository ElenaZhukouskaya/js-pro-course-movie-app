import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import {
//  fetchMovies,
//  setMoviesLimit,
//  SearchMovies,
//} from "../../store/actions/moviesAction";
//mport { RootState } from "../../store/store";
//import { SearchActionType } from "../../store/types";
//import Movie from "../Movie";
import Search from "../Search";
import TopBar from "../TopBar";
import styles from "./MovieResults.module.css";

const MovieResult: React.FC = () => {
  //  const { movies } = useSelector((state: RootState) => state.movies);

  /*  const dispatch = useDispatch();
  const [moviesAmount, setMoviesAmount] = useState(20);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setMoviesLimit(moviesAmount));
  }, [dispatch, moviesAmount]);*/

  // const filteredMovies = dispatch(SearchMovies(movies, filter));

  return (
    <div>
      <TopBar />
      {/*}div className={styles.container}>
        {movies.map((item) => (
          <Movie
            id={item.id}
            poster_path={item.poster_path}
            release_date={item.release_date}
            genres={item.genres}
            title={item.title}
          />
        ))}
      </div>*/}
    </div>
  );
};

export default MovieResult;
