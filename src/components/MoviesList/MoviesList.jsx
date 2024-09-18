import css from "./MoviesList.module.css"
// import MoviesCard from "../MoviesCard/MoviesCard"
import { useLocation, Link } from "react-router-dom";

export default function MoviesList({ movies }) {

  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.item}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
          {/* <MoviesCard movie={movie} /> */}
        </li>
      ))}
    </ul>
  )
}