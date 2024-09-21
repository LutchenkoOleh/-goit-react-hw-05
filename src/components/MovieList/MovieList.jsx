import css from "./MovieList.module.css"
import { useLocation, Link } from "react-router-dom";

export default function MoviesList({ movies }) {

  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.item}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  )
}