import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./TopBar.module.css";

/*interface TopBarProps {
  foundMoviesAmount: number;
}*/

const TopBar: React.FC = () => {
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
