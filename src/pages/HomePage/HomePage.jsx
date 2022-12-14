import { useEffect, useState } from 'react';

import { Title } from './HomePage.styled';
import { fetchTrendingMovies } from 'services/Api';
import { Box } from 'components/Box/Box';
import Movies from 'components/Movies/Movies';

const HomePage = () => {
  const [moviesList, setMoviesList] = useState([]);
  useEffect(() => {
    async function fetch() {
      const videoResponse = await fetchTrendingMovies();
      const allVideoData = videoResponse.data.results;

      const videoData = allVideoData.map(
        ({ id, title, poster_path: poster, vote_average }) => ({
          id,
          title,
          poster: 'https://image.tmdb.org/t/p/w500' + poster,
          vote_average,
        })
      );

      setMoviesList(videoData);
    }

    try {
      fetch();
    } catch (error) {
      console.log(error, `Попробуйте перезагрузить страницу`);
    }
  }, []);

  return (
    <Box p="30px 0">
      <Title>Trending Today</Title>
      {moviesList && <Movies movies={moviesList} />}
    </Box>
  );
};

export default HomePage;
