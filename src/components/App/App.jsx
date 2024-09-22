import css from "./App.module.css"
import { Routes, Route } from "react-router-dom"
import MovieDetails from "../../pages/MovieDetailsPage/MovieDetailsPage"
import Movies from "../../pages/MoviesPage/MoviesPage"
import Home from "../../pages/HomePage/HomePage"
import MovieReviews from "../MovieReviews/MovieReviews"
import MovieCast from "../MovieCast/MovieCast"
import NotFound from "../../pages/NotFound/NotFound"
import Navigation from "../Navigation/Navigation"
import { Suspense } from "react"
import { lazy } from "react"

export default function App() {
  const HomeLazy = lazy(() => import('../../pages/HomePage/HomePage'));
  const MoviesLazy = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
  const MovieDetailsLazy = lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage'));
  const MovieCastLazy = lazy(() => import('../MovieCast/MovieCast'));
  const MovieReviewsLazy = lazy(() => import('../MovieReviews/MovieReviews'));

  return (
    <div className={css.container}>

      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomeLazy />} />
          <Route path="/movies" element={<MoviesLazy />} />
          <Route path="/movies/:movieId" element={<MovieDetailsLazy />}>
            <Route path="cast" element={<MovieCastLazy />} />
            <Route path="reviews" element={<MovieReviewsLazy />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  )

};

