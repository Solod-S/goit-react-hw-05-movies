import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>}>
        <Route index element={<div>HomePage</div>} />
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
