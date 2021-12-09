import React, { useEffect, useState } from "react";
import styles from "./MovieDetailsPage.module.css";
import Movie from "models/Movie";
import { useParams } from "react-router";
import noimage from "../../images/noimage.jpg";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setMovie(result);
      });
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.titleMovieDetails}>
        <div className={styles.wrapper}>
          <img
            src={movie?.poster_path}
            alt=""
            onError={(e) => {
              const imgElement = e.target as HTMLImageElement;
              if (imgElement.src.indexOf("noimage.jpg") === -1) {
                imgElement.onerror = null;
                imgElement.src = noimage;
              }
            }}
            className={styles.poster}
          />
        </div>
        <div className={styles.details}>
          <div className={styles.title}>
            <span className={styles.item}>Title: </span>
            {movie?.title}
          </div>
          <div className={styles.text}>
            <span className={styles.item}>Release date: </span>
            {movie?.release_date}
          </div>
          <div className={styles.text}>
            <span className={styles.item}>Genres: </span>
            {movie?.genres.join(", ")}
          </div>
          <div className={styles.text}>
            <span className={styles.item}>Runtime: </span>
            {movie?.runtime} min
          </div>
          <div className={styles.text}>
            <span className={styles.item}>Budget: </span>
            {movie?.budget} $
          </div>
          <div className={styles.text}>
            {" "}
            <span className={styles.item}>Vote average: </span>
            {movie?.vote_average}
          </div>
          <div className={styles.text}>
            <span className={styles.item}>Vote count: </span>
            {movie?.vote_count}
          </div>
        </div>
      </div>
      <p className={styles.overview}>
        <span className={styles.item}>Overview: </span>
        {movie?.overview}
      </p>
    </div>
  );
};

export default MovieDetailsPage;
