import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
function App() {
  return (
    <Routes>
      <Route end path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<div>movieId</div>}>
          <Route path="cast" element={<div>Cast</div>} />
          <Route path="reviews" element={<div>Reviews </div>} />

          {/* вложенный маршрут + в нем еще вложенные маршруты*/}
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
        {/* Если пользователь зашел по несуществующему маршруту, попадет на домашнюю страницу. */}
      </Route>
    </Routes>
  );
}

export default App;
