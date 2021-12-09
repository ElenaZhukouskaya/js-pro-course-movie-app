import React, { useState } from "react";
import styles from "./Search.module.css";
import { SearchBy } from "models/SearchBy";
import { RootState } from "store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  setSearchBy,
  setSearchInput,
} from "store/actions/moviesAction";

const Search: React.FC = () => {
  const [input, setInput] = useState("");

  const { searchBy, sortBy } = useSelector((state: RootState) => state.movies);

  const dispatch = useDispatch();

  const onClickSearch = () => {
    dispatch(setSearchInput(input));
    dispatch(fetchMovies(sortBy, input, searchBy, 0));
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      onClickSearch();
    }
  };

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchBy(event.target.value as SearchBy));
  };

  return (
    <div className={styles.searchContainer}>
      <h3 className={styles.text}>find your movie by {searchBy}</h3>
      <div className={styles.searchby}>
        <label>
          <input
            type="radio"
            name="searchBy"
            value={SearchBy.title}
            id="title"
            onChange={radioHandler}
            defaultChecked
          />
          <span className={styles.titleRadioButton}>title</span>
        </label>
        <label>
          <input
            type="radio"
            name="searchBy"
            value={SearchBy.genres}
            id="genres"
            onChange={radioHandler}
          />
          <span className={styles.titleRadioButton}>genres</span>
        </label>
      </div>

      <div className={styles.searchPanel}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search any movie"
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={keyDownHandler}
        />
        <button className={styles.searchButton} onClick={onClickSearch}>
          <span className={styles.searchText}> Search {"    "}</span>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default Search;
