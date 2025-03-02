import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navigation from "/src/components/Navigation/Navigation";
import MovieDetailsPage from "/src/pages/MovieDetailsPage/MovieDetailsPage";

const HomePage = lazy(() => import("/src/pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("/src/pages/MoviesPage/MoviesPage"));
const MovieCast = lazy(() => import("/src/components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("/src/components/MovieReviews/MovieReviews")
);
const NotFoundPage = lazy(() =>
  import("/src/components/NotFoundPage/NotFoundPage")
);

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Toaster toastOptions={{ duration: 3000, position: "top-right" }} />
    </>
  );
}

export default App;
