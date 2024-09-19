
import { getTrendingMovies } from "../../movies-api";
import { useState, useEffect } from "react";
import MovieList from "../../components/MoviesList/MoviesList"

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const movies = await getTrendingMovies();
        setMovies(movies);
      } catch (err) {
        setError('Failed to fetch trending movies');
      }
    };

    fetchTrendingMovies();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}