import React from "react";
import styles from "./NoMatch.module.css";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <>
      <div className={styles.noMatch}>
        <h1 className={styles.title}>Not Found</h1>
        <p className={styles.text}>Sorry, this page doesn`t appear to exist</p>
        <button className={styles.button}>
          <Link className={styles.link} to="/movies">
            Head back home
          </Link>
        </button>
      </div>
    </>
  );
};

export default NoMatch;
