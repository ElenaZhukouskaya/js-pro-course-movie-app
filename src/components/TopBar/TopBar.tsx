import { SortBy } from "common/SortBy";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, setSortBy } from "store/actions/moviesAction";
import { RootState } from "store/store";
import styles from "./TopBar.module.css";

/*interface TopBarProps {
  foundMoviesAmount: number;
}*/

const TopBar: React.FC = () => {
  const { searchInput, searchBy, total } = useSelector(
    (state: RootState) => state.movies
  );

  const dispatch = useDispatch();

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const sortBy = event.target.value as SortBy;

    dispatch(setSortBy(sortBy));
    dispatch(fetchMovies(sortBy, searchInput, searchBy, 0));
  };

  return (
    <div className={styles.TopBar}>
      <div className={styles.SearchedMoviesAmount}>{total} movies found</div>
      <div className={styles.SortPanel}>
        <p className={styles.Sortby}>Sort by</p>
        <label>
          <input
            type="radio"
            name="sortBy"
            value={SortBy.releaseDate}
            id="releaseDate"
            onChange={radioHandler}
          />
          <span className={styles.TitleRadioButtons}>release date</span>
        </label>
        <label>
          <input
            type="radio"
            name="sortBy"
            value={SortBy.rating}
            id="releaseDate"
            onChange={radioHandler}
            defaultChecked
          />
          <span className={styles.TitleRadioButtons}>rating</span>
        </label>
      </div>
    </div>
  );
};

export default TopBar;
