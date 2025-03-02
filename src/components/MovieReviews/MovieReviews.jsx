import style from "./MovieReviews.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "/src/api/api";

function MovieReviews() {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieId).then((data) => setMovieReviews(data));
  }, [movieId]);

  return (
    <ul>
      {movieReviews && movieReviews.results.length > 0 ? (
        movieReviews.results.map(({ id, author, content }) => (
          <li className={style.reviewCard} key={id}>
            <p>
              <strong>Author: </strong>
              {author}
            </p>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </ul>
  );
}

export default MovieReviews;
