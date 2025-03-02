import style from "./MovieDetailsPage.module.css";
import { FaArrowLeft } from "react-icons/fa";

import { useEffect, useRef, useState } from "react";
import { useParams, Link, useLocation, Outlet } from "react-router-dom";

import MovieCard from "/src/components/MovieCard/MovieCard";

import { fetchMovieById } from "/src/api/api";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackLink = useRef(location.state ?? "/");

  useEffect(() => {
    fetchMovieById(movieId).then((data) => setMovie(data));
  }, [movieId]);

  return (
    <div className="container">
      <Link className="goBackLink" to={goBackLink.current}>
        <FaArrowLeft /> Go back
      </Link>
      <MovieCard movie={movie} />
      <hr />
      <div className={style.additionalInfo}>
        <h3 className="heading">Additional Information:</h3>
        <ul className={style.additionalInfoList}>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
