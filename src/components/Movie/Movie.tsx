import React, { useCallback, useState } from "react";
import MovieItem from "../../Common/Movie";
import styles from "./Movie.module.css";

const Movie: React.FC<MovieItem> = (props) => {
  const movie = props;

  const [isModal, setIsModal] = useState(false);
  const onCloseModal = useCallback(() => {
    setIsModal(isModal === false ? true : false);
  }, [isModal, setIsModal]);

  return (
    <>
      <div className={styles.Card}>
        <img src={movie.poster_path} alt="" />
        <div className={styles.Description}>
          <div className={styles.Row}>
            <h3 className={styles.Title}>{movie.title}</h3>
            <p className={styles.Date}>{movie.release_date}</p>
          </div>
          <div className={styles.Genres}>{movie.genres.join(", ")}</div>
        </div>
      </div>
    </>
  );
};

export default Movie;
