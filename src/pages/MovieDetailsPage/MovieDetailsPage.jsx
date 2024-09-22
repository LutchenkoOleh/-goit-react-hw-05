
import { Link, useLocation, useParams, Outlet, NavLink } from "react-router-dom"
import { getMovieById } from "../../movies-api"
import { useState, useEffect, useRef } from "react";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import MovieCast from "../../components/MovieCast/MovieCast";
import css from "./MovieDetailsPage.module.css"


export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const location = useLocation();
  const previousLocation = useRef(location.state?.from ?? '/movies')

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
    <div className={css.container}>

      <div className={css.moviePoster}>
        <div className={css.goBack}>
          <Link to={previousLocation.current}>Go back</Link>
        </div>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      </div>

      <div className={css.movieDetails}>
        <h1>{movie.title} ({movie.release_date.split("-")[0]})</h1>
        <p>User Score: {Math.round(movie.vote_average * 10)}%</p>

        <h3>Overview</h3>
        <p>{movie.overview}</p>

        <h3>Genres</h3>
        <div className={css.genres}>
          {movie.genres && movie.genres.map((genre) => (
            <span key={genre.id}>{genre.name}</span>
          ))}
        </div>

        <nav className={css.additionalInfo}>
          <h3>Additional information</h3>
          <ul>
            <li>
              <NavLink to="cast" activeClassName={css.activeLink}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" activeClassName={css.activeLink}>
                Reviews
              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </div>
  );

}