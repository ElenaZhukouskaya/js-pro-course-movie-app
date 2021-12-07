import { SearchBy } from "common/SearchBy";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  setSearchBy,
  setSearchInput,
} from "store/actions/moviesAction";
import { RootState } from "store/store";
import styles from "./Search.module.css";

const Search: React.FC = () => {
  const [input, setInput] = useState("");

  const { searchBy, sortBy } = useSelector((state: RootState) => state.movies);

  const dispatch = useDispatch();

  const onClickSearch = () => {
    dispatch(setSearchInput(input));
    dispatch(fetchMovies(sortBy, input, searchBy, 0));
  };

  // onKeyDown handler function
  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      onClickSearch();
    }
  };

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchBy(event.target.value as SearchBy));
  };

  return (
    <div className={styles.SearchContainer}>
      <h3 className={styles.Slogan}>find your movie by {searchBy}</h3>
      <div className={styles.Searchby}>
        {/*<p className={styles.SearchbyTitle}>search by</p>*/}
        <div className={styles.RadioButtons}>
          <label>
            <input
              type="radio"
              name="searchBy"
              value={SearchBy.title}
              id="title"
              onChange={radioHandler}
              defaultChecked
            />
            <span className={styles.TitleRadioButtons}>title</span>
          </label>
          <label>
            <input
              type="radio"
              name="searchBy"
              value={SearchBy.genres}
              id="genres"
              onChange={radioHandler}
            />
            <span className={styles.TitleRadioButtons}>genres</span>
          </label>
        </div>
      </div>

      <div className={styles.SearchPanel}>
        <input
          className={styles.SearchInput}
          type="text"
          placeholder="Search any movie"
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={keyDownHandler}
        />
        <button className={styles.SearchButton} onClick={onClickSearch}>
          Search {"    "}
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default Search;
