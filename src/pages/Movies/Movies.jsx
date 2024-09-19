
import { useState } from "react"
import { getMovies } from "../../movies-api";
import MovieList from "../../components/MoviesList/MoviesList";

export default function Products() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const searchResults = await getMovies(query);
      setMovies(searchResults);
    } catch (err) {
      setError('Failed to fetch movies');
    }
  };

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie name"
        />
        <button type="submit">Search</button>
      </form>
      {handleSearch.length > 0 ? (< MovieList movies={movies} />) : (
        <p>We don`t have this movie!
        </p>
      )}
    </div>
  );
}