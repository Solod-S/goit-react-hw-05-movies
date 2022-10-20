import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<div>HomePage</div>} /> */}
        <Route path="movies" element={<div>Movies</div>}>
          <Route path=":movieId" element={<d />}>
            <Route path="cast" element={<div>Cast</div>} />
            <Route path="cast" element={<div>Reviews </div>} />
          </Route>
          {/* вложенный маршрут + в нем еще вложенные маршруты*/}
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
        {/* Если пользователь зашел по несуществующему маршруту, попадет на домашнюю страницу. */}
      </Route>
    </Routes>
  );
}

export default App;
