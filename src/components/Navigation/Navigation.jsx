import clsx from "clsx"
import css from "./Navigation.module.css"
import { NavLink } from "react-router-dom"


const getNavLinkClass = (props) => {
  return clsx(css.link, props.isActive && css.active)
}
export default function Navigation() {
  return (


    <nav className={css.nav}>
      <NavLink to="/" className={getNavLinkClass} >Home</NavLink>
      <NavLink to="/movies" className={getNavLinkClass}>Movies</NavLink>
    </nav>

  )
}