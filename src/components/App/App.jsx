import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import Layout from 'components/Layout/Layout';

import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
// import HomePage from 'pages/HomePage/HomePage';
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
// import MoviesPage from 'pages/MoviesPage/MoviesPage';
const MovieDetailPage = lazy(() => import('pages/MovieDetail/MovieDetailPage'));
// import MovieDetailPage from 'pages/MovieDetail/MovieDetailPage';

function App() {
  return (
    <Routes>
      <Route end path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
