import { SearchBy } from "common/SearchBy";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "store/actions/moviesAction";
import { RootState } from "store/store";
import styles from "./Search.module.css";

const Search: React.FC = () => {
  const [input, setInput] = useState("");
  const [selectedSearch, setSelectedSearch] = useState(SearchBy.title);

  const { searchBy, sortBy, limit } = useSelector(
    (state: RootState) => state.movies
  );

  const dispatch = useDispatch();

  const onClickSearch = () => {
    dispatch(fetchMovies(sortBy, "asc", input, searchBy, "", 0, limit));
  };

  // onKeyDown handler function
  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      console.log("movie99:", input);
    }
  };

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSearch(event.target.value as SearchBy);
  };

  return (
    <div className={styles.SearchContainer}>
      <h3 className={styles.Slogan}>find your movie by {selectedSearch}</h3>
      <div className={styles.Searchby}>
        {/*<p className={styles.SearchbyTitle}>search by</p>*/}
        <div className={styles.RadioButtons}>
          <label>
            <input
              type="radio"
              name="select"
              value={SearchBy.title}
              id="title"
              onChange={radioHandler}
            />
            <span className={styles.TitleRadioButtons}>title</span>
          </label>
          <label>
            <input
              type="radio"
              name="select"
              value={SearchBy.genre}
              id="genre"
              onChange={radioHandler}
            />
            <span className={styles.TitleRadioButtons}>genre</span>
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
