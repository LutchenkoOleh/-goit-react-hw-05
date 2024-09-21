
import { useState } from "react"
import { getMovies } from "../../movies-api";
import MovieList from "../../components/MoviesList/MoviesList";
import { useNavigate } from "react-router-dom";
import css from "./Movies.module.css"

export default function Movies() {

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false)
  const navigate = useNavigate();


  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/movies?query=${query}`);
    }
    try {
      const searchResults = await getMovies(query);
      setMovies(searchResults);
      setSearched(true);
      setQuery('')
    } catch (err) {
      setError('Failed to fetch movies');
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
      {searched && (movies.length > 0 ? (< MovieList movies={movies} />) : (
        <p>We don`t have this movie!
        </p>
      ))}
    </div>
  );
}