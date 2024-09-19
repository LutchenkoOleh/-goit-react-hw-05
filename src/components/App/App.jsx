import css from "./App.module.css"
import { Routes, Route } from "react-router-dom"
import MovieDetails from "../../pages/MovieDetails/MovieDetails"
import Movies from "../../pages/Movies/Movies"
import Home from "../../pages/Home/Home"
import MovieReviews from "../MoviesReviews/MovieReviews"
import MovieCast from "../MoviesCast/MovieCast"
import NotFound from "../../pages/NotFound/NotFound"
import Navigation from "../Navigation/Navigation"
import { Suspense } from "react"
import { lazy } from "react"

export default function App() {
  const HomeLazy = lazy(() => import('./App').then(() => ({ default: Home })));
  const MoviesLazy = lazy(() => import('./App').then(() => ({ default: Movies })));
  const MovieDetailsLazy = lazy(() => import('./App').then(() => ({ default: MovieDetails })));
  const MovieCastLazy = lazy(() => import('./App').then(() => ({ default: MovieCast })));
  const MovieReviewsLazy = lazy(() => import('./App').then(() => ({ default: MovieReviews })));

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

