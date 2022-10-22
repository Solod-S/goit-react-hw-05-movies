import { useState } from 'react';

import Searchbar from 'components/SearchBar/SearchBar';
import Movies from 'components/Movies/Movies';

const MoviesPage = () => {
  const [searchMoviesResult, setSearchMoviesResult] = useState([]);
  console.log(`получили`, searchMoviesResult);

  return (
    <>
      <Searchbar setSearchMovies={setSearchMoviesResult} />

      {searchMoviesResult && <Movies movies={searchMoviesResult} />}
    </>
  );
};

export default MoviesPage;
