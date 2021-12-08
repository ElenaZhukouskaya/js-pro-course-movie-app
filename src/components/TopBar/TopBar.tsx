import React from "react";
import styles from "./TopBar.module.css";
import { RootState } from "store/store";
import { useDispatch, useSelector } from "react-redux";
import { SortBy } from "common/SortBy";
import { fetchMovies, setSortBy } from "store/actions/moviesAction";

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
    <div className={styles.topBar}>
      <div className={styles.searchedMoviesAmount}>{total} movies found</div>
      <div className={styles.sortPanel}>
        <p className={styles.sortby}>Sort by:</p>
        <label>
          <input
            type="radio"
            name="sortBy"
            value={SortBy.releaseDate}
            id="releaseDate"
            onChange={radioHandler}
          />
          <span className={styles.titleRadioButtons}>release date</span>
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
