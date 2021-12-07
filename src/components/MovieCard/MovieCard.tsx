import React, { useCallback, useEffect, useState } from "react";
import styles from "./MovieCard.module.css";
import Movie from "../../common/Movie";
import Modal from "components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "store/actions/moviesAction";
import { RootState } from "store/store";

interface MovieProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieProps> = (props) => {
  const { movie } = props;
  const [isModal, setIsModal] = useState(false);
  const onCloseModal = useCallback(() => {
    setIsModal(isModal === false ? true : false);
  }, [isModal, setIsModal]);

  return (
    <>
      <div className={styles.Card}>
        <div className={styles.image}>
          <div className={styles.wrapper}>
            <img
              src={movie.poster_path}
              alt=""
              onError={(e) => {
                const imgElement = e.target as HTMLImageElement;
                const defaultImgUrl =
                  "https://fb.ru/misc/i/gallery/10783/1689212.jpg";
                if (imgElement.src !== defaultImgUrl) {
                  imgElement.onerror = null;
                  imgElement.src = defaultImgUrl;
                }
              }}
              className={styles.poster}
            />
          </div>
          <button className={styles.button} onClick={() => setIsModal(true)}>
            <div className={styles.iconButton}>...</div>
          </button>
        </div>

        <div className={styles.Description}>
          <h3 className={styles.Title}>{movie.title}</h3>
          <p className={styles.Date}>{movie.release_date}</p>
          <div className={styles.Genres}>{movie.genres.join(", ")}</div>
        </div>
      </div>

      <Modal
        isVisible={isModal}
        children={
          <>
            <div
              style={{
                backgroundImage: `url("${movie.poster_path}")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                style={{
                  backgroundColor: "#ffffff",
                  opacity: 0.6,
                }}
              >
                <div className={styles.ModalTitle}>{movie.title}</div>
                <div className={styles.ModalText}>
                  {movie.genres.join(", ")}
                </div>
                <div className={styles.ModalText}>{movie.overview}</div>
                <div className={styles.ModalText}>
                  Popularity: {movie.vote_average}
                </div>
                <div className={styles.ModalText}>
                  Budget: {movie.vote_count}
                </div>
              </div>
            </div>
          </>
        }
        onCloseModal={onCloseModal}
        key={movie.id}
      />
    </>
  );
};

export default MovieCard;
