import React, { useCallback, useState } from "react";
import styles from "./MovieCard.module.css";
import Movie from "../../models/Movie";
import Modal from "components/Modal";
import { Link } from "react-router-dom";
import noimage from "../../images/noimage.jpg";

interface MovieProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieProps> = (props) => {
  const { movie } = props;
  const [isModal, setIsModal] = useState(false);
  const onCloseModal = useCallback(() => {
    setIsModal(isModal === false ? true : false);
  }, [isModal, setIsModal]);

  const getTrimmedText = (text: string) => {
    var length = text.length;
    var maxLength = 33;

    return length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.image}>
          <Link className={styles.link} to={`/movies/${movie.id}`}>
            <div className={styles.wrapper}>
              <img
                src={movie.poster_path}
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
          </Link>
          <button className={styles.button} onClick={() => setIsModal(true)}>
            <div className={styles.iconButton}>...</div>
          </button>
        </div>
        <Link className={styles.link} to={`/movies/${movie.id}`}>
          <div className={styles.description}>
            <h3 className={styles.title}>{getTrimmedText(movie.title)}</h3>

            <p className={styles.date}>{movie.release_date}</p>
            <div
              className={styles.genres}
              role="list"
              aria-label={movie.genres.join(", ")}
            >
              {getTrimmedText(movie.genres.join(", "))}
            </div>
          </div>
        </Link>
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
                  opacity: 0.7,
                }}
              >
                <Link className={styles.link} to={`/movies/${movie.id}`}>
                  {movie.title}
                </Link>

                <div className={styles.modalText}>
                  {movie.genres.join(", ")}
                </div>
                <div className={styles.modalText}>{movie.overview}</div>
                <div className={styles.modalText}>
                  Popularity: {movie.vote_average}
                </div>
                <div className={styles.modalText}>Budget: {movie.budget}</div>
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
