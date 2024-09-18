import css from "./App.module.css"
import { Routes, Route } from "react-router-dom"
import MovieDetails from "../../pages/MovieDetails"
import Movies from "../../pages/Movies"
import Home from "../../pages/Home"
import MovieReviews from "../../pages/MovieReviews"
import MovieCast from "../../pages/MovieCast"
import NotFound from "../../pages/NotFound"
import Navigation from "./Navigation/Navigation"

export default function App() {
  return (
    <div className={css.container}>

      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movieId" element={<MovieDetails />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/reviews" element={<MovieReviews />} />
        <Route path="/cast" element={<MovieCast />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

    </div>
  )

};

