import clsx from "clsx"
import css from "./Navigation.module.css"
import { NavLink } from "react-router-dom"


const getNavLinkClass = (props) => {
  return clsx(css.link, props.isActive && css.active)
}
export default function Navigation() {
  return (
    <ul>

      <li>
        <NavLink to="/" className={getNavLinkClass} >Home</NavLink>
      </li>

      <li>
        <NavLink to="/movieId" className={getNavLinkClass}>MovieDetails</NavLink>
      </li>

      <li>
        <NavLink to="/cast" className={getNavLinkClass}>MovieCast</NavLink>
      </li>

      <li>
        <NavLink to="/reviews" className={getNavLinkClass}>MovieReviews</NavLink>
      </li>

      <li>
        <NavLink to="/movies" className={getNavLinkClass}>Movies</NavLink>
      </li>
    </ul>

  )
}