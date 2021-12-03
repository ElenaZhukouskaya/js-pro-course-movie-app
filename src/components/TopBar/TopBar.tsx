import React, { useState } from "react";
import styles from "./TopBar.module.css";

//interface TopBarProps {
//  searchedMoviesAmount: number;
//  limit: MovieItem;
//}

const TopBar: React.FC = () => {
  // const [moviesAmount, setMoviesAmount] = useState(limit);
  return (
    <div className={styles.TopBar}>
      <div className={styles.SearchedMoviesAmount}>n movies found</div>
      <div className={styles.SortPanel}>
        <p className={styles.Sortby}>Sort by</p>
        <button className={styles.SortbyButton}>release date</button>
        <button className={styles.SortbyButton}>rating</button>
      </div>
    </div>
  );
};

export default TopBar;
