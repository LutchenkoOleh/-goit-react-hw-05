import css from "./App.module.css"
import { Routes, Route } from "react-router-dom"
import MovieDetails from "../../pages/MovieDetails"
import Movies from "../../pages/Movies"
import Home from "../../pages/Home"
import MovieReviews from "../MoviesReviews/MovieReviews"
import MovieCast from "../MoviesCast/MovieCast"
import NotFound from "../../pages/NotFound"
import Navigation from "../Navigation/Navigation"
import { Suspense } from "react"

export default function App() {
  return (
    <div className={css.container}>

      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<MovieCast />} />
          <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  )

};

