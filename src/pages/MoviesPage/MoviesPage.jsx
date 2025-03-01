import { useSearchParams } from "react-router-dom";
import SearchBar from "/src/components/SearchBar/SearchBar";
import { useEffect, useState } from "react";

import MovieList from "/src/components/MovieList/MovieList";

import { fetchMovieByQuery } from "/src/api/api";

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  function handleSearch(query) {
    setSearchParams({ query });
  }

  useEffect(() => {
    const query = searchParams.get("query");
    if (!query) {
      return;
    }

    fetchMovieByQuery(query).then((data) => setMovies(data.results));

    console.log(searchParams);
  }, [searchParams]);

  console.log(searchParams);
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;
