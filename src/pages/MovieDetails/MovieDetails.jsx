
import { Link, NavLink, useLocation, useParams, Outlet } from "react-router-dom"
import { getMovieById } from "../../movies-api"
import { useState, useEffect } from "react";
import MovieReviews from "../../components/MoviesReviews/MovieReviews";
import MovieCast from "../../components/MoviesCast/MovieCast";


export default function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

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

  const toggleCast = () => setShowCast(prevState => !prevState);
  const toggleReviews = () => setShowReviews(prevState => !prevState);


  return (
    <div>
      <Link to={location?.state?.from ?? '/movies'}>Go back</Link>

      <h1>{movie.title} ({movie.release_date})</h1>
      <p>{movie.overview}</p>
      <h3>Popularity:
        <p>{movie.popularity}</p>
      </h3>

      <div>
        <h3>Genres:</h3>
        <ul>
          {movie.genres && movie.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>

      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} width="300" height="400" />
      <nav>
        <h2>Additional information</h2>
        <NavLink onClick={toggleCast} to="cast" state={{ from: location?.state?.from ?? '/' }}>Cast</NavLink>
        <NavLink onClick={toggleReviews} to="reviews" state={{ from: location?.state?.from ?? '/' }}>Reviews</NavLink>
      </nav>
      <Outlet />

    </div>
  );
}