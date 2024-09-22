import { useState, useEffect } from "react";
import { getMovies } from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import css from "./MoviesPage.module.css";

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const movieQuery = searchParams.get("query");
    if (movieQuery) {
      fetchMovies(movieQuery);
    }
  }, [searchParams]);

  const fetchMovies = async (searchQuery) => {
    try {
      const searchResults = await getMovies(searchQuery);
      setMovies(searchResults);
      setSearched(true);
    } catch (err) {
      setError("Failed to fetch movies");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ query });
      setQuery('');
    }
  };

  if (error) return <div>{error}</div>;

  return (
    <div className={css.wrap}>
      <form className={css.form} onSubmit={handleSearch}>
        <input
          className={css.input}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie name"
        />
        <button className={css.button} type="submit">Search</button>
      </form>
      {searched && (movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        <p>We don't have this movie!</p>
      ))}
    </div>
  );
}