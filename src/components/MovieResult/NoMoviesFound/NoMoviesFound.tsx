import React from "react";
import styles from "./NoMoviesFound.module.css";

const NoMoviesFound = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Thank you for choosing our resource!</p>
      <p className={styles.text}>
        Here you can find links to 3000 films of various genres: drama, comedy,
        action, adventure, science fiction, fantasy, family, triller and so on.
      </p>
      <p className={styles.text}>
        For a successful search, please select a search criterion (movie's title
        or genre) and enter a keyword in the search line. For example, set the
        switch to "genre" and enter the word "drama" into the search bar. You
        will be shown all films that meet this condition.
      </p>
      <p className={styles.text}>
        If you want to sort them by release date, then in the "Sort by" section,
        select sorting by "release date". Movies are sorted starting from the
        most recent. You can also sort the resulting list of films by their
        rating.
      </p>
      <p className={styles.text}>
        If you are interested in a movie and want to learn more about it, then
        by clicking on the button "...", you will see a summary of the movie you
        have chosen, as well as information about its rating and budget.
      </p>
      <p className={styles.text}>
        Want to watch it? Follow the link to the movie page by clicking on the
        movie name in the summary window or on the movie card on the main page.
      </p>
      <p className={styles.title}>Happy viewing!</p>
    </div>
  );
};

export default NoMoviesFound;
