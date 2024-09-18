import { Link, NavLink, useLocation, useParams } from "react-router-dom"
import { getMovieById } from "../movies-api"
import { useState, useEffect } from "react";
import MovieReviews from "../components/MoviesReviews/MovieReviews";
import MovieCast from "../components/MoviesCast/MovieCast";


export default function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movie = await getMovieById(movieId);
        setMovie(movie);
      } catch (err) {
        setError('Failed to fetch movie details');
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (error) return <div>{error}</div>;
  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <NavLink to="/movies/:movieId/cast"><MovieCast /></NavLink>
      <NavLink to="/movies/:movieId/reviews"><MovieReviews /></NavLink>

      <Link to={location?.state?.from ?? '/movies'}>Go back</Link>
    </div>
  );
}